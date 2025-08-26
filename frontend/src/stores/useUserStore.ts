import { create } from "zustand";

interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Contact {
  phone: string;
  website: string;
  linkedin: string;
  github: string;
}

interface Earnings {
  totalEarnings: number;
  hourlyRate: number;
  currency: string;
}

interface Profile {
  username: string;
  about: string;
  contact: Contact;
  location: string;
  earnings: Earnings;
  workExperience: WorkExperience[];
}

interface UserState {
  email: string;
  role: "user" | "recruiter";
  skills: string[];
  profile: Profile;
  // actions
  setUsername: (username: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addWorkExperience: (exp: WorkExperience) => void;
  removeWorkExperience: (index: number) => void;
}

interface UserState {
  email: string;
  role: "user" | "recruiter";
  skills: string[];
  profile: Profile;

  // actions
  setUsername: (username: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  addWorkExperience: (exp: WorkExperience) => void;
  removeWorkExperience: (index: number) => void;
}
export const useUserStore = create<UserState>((set) => ({
  email: "",
  role: "user",
  skills: [],
  profile: {
    username: "",
    about: "",
    contact: {
      phone: "",
      website: "",
      github: "",
      linkedin: "",
    },
    location: "",
    earnings: {
      totalEarnings: 0,
      hourlyRate: 0,
      currency: "PHP",
    },
    workExperience: [],
  },

  // ✅ actions
  setUsername: (username) =>
    set((state) => ({
      profile: { ...state.profile, username },
    })),

  addSkill: (skill) =>
    set((state) => ({
      skills: [...state.skills, skill],
    })),

  removeSkill: (skill) =>
    set((state) => ({
      skills: state.skills.filter((s) => s !== skill),
    })),

  addWorkExperience: (exp) =>
    set((state) => ({
      profile: {
        ...state.profile,
        workExperience: [...state.profile.workExperience, exp],
      },
    })),

  removeWorkExperience: (index) =>
    set((state) => ({
      profile: {
        ...state.profile,
        workExperience: state.profile.workExperience.filter(
          (_, i) => i !== index,
        ),
      },
    })),
}));
