import { create } from "zustand";
interface SalaryRange {
  min: number;
  max: number;
}

interface Company {
  name: string;
  logoUrl?: string;
  location?: string;
}
export interface Job {
  _id: string;
  title: string;
  description: string;
  company: Company;
  salaryRange: SalaryRange;
  employmentType: string;
  postedBy: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

interface JobStore {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  addJob: (job: Job) => void;
}

export const useJobsStore = create<JobStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
}));
