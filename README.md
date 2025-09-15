<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
 
  <h1>💼 KitaJobs</h1>
  <p>
    <strong>KitaJobs</strong> is a LinkedIn-inspired full-stack platform built for the 
    <strong>Philippines tech community</strong>. It connects employers, freelancers, 
    and job seekers, offering a secure, scalable space to post jobs, build profiles, 
    and collaborate. The stack includes <strong>React, Vite, Tailwind CSS, Node.js, Express, JWT, and MongoDB</strong>.
  </p>
   <p>
    Backend (API hosted separately, powered by Node.js + Express + MongoDB).
  </p>
  <h2>✨ Features</h2>
  <ul>
    <li><strong>User Accounts</strong>: Secure authentication with JWT, user data stored in MongoDB.</li>
    <li><strong>Job Listings</strong>: Post, browse, and filter jobs in the Philippine tech industry.</li>
    <li><strong>Profiles</strong>: Employers and freelancers can create and edit professional profiles.</li>
    <li><strong>Employer Dashboard</strong>: Manage applicants, review freelancer profiles, and post jobs.</li>
    <li><strong>Freelancer Tools</strong>: Apply to projects, showcase skills, and manage opportunities.</li>
    <li><strong>Responsive UI</strong>: Mobile-first design powered by Tailwind CSS.</li>
    <li><strong>Animations</strong>: Smooth user experience with Framer Motion.</li>
    <li><strong>Notifications</strong>: Real-time toast notifications for key actions.</li>
    <li><strong>State Management</strong>: Global state powered by Zustand for scalability.</li>
  </ul>
  <h2>⚙️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend</strong>: React, Vite, Tailwind CSS, Zustand, Framer Motion</li>
    <li><strong>Backend</strong>: Node.js, Express.js</li>
    <li><strong>Database</strong>: MongoDB (cloud-hosted)</li>
    <li><strong>Authentication</strong>: JWT-based authentication & authorization</li>
    <li><strong>Deployment</strong>: Vercel (frontend), Render/Heroku/Custom (backend)</li>
  </ul>
  <h2>⚙️ Installation</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (v18+)</li>
    <li>MongoDB Atlas account (or local MongoDB server)</li>
    <li>NPM, Yarn, or PNPM</li>
  </ul>
  <h3>Steps</h3>
  <ol>
    <li>
      Clone the repository:
      <pre><code>git clone https://github.com/yourusername/kitajobs.git</code></pre>
    </li>
    <li>
      Navigate to frontend:
      <pre><code>cd frontend</code></pre>
      Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Navigate to backend:
      <pre><code>cd backend</code></pre>
      Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Add your <code>.env</code> in backend with:
      <pre><code>
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
      </code></pre>
    </li>
    <li>
      Start development servers:
      <pre><code>
# Frontend
npm run dev
# Backend
npm run dev
      </code></pre>
    </li>
  </ol>
  <h2>📖 Usage</h2>
  <h3>Job Seekers</h3>
  <p>Create a secure account, build your profile, and browse verified opportunities in the Philippine tech industry.</p>
  <h3>Employers</h3>
  <p>Post jobs, manage applicants, and find freelancers through the employer dashboard.</p>
  <h3>Freelancers</h3>
  <p>Apply to projects, showcase your skills, and connect with clients.</p>
  <h2>🤝 Contributing</h2>
  <p>Contributions are welcome!</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch.</li>
    <li>Implement features or fixes.</li>
    <li>Test thoroughly.</li>
    <li>Submit a pull request.</li>
  </ol>
  <h2>📬 Contact</h2>
  <p>
    For questions or feedback, email me at
    <a href="mailto:rashidvisda@gmail.com">rashidvisda@gmail.com</a>.
  </p>
</body>
</html>
