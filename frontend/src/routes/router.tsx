import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import JobsListPage from "../pages/JobsListPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import JobsFilterPage from "../pages/JobsFilterPage";
import PostJobPage from "../pages/PostJobPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/jobs", element: <JobsListPage /> },
      { path: "/job/:id", element: <JobDetailsPage /> },
      { path: "/jobs/:category/:id", element: <JobsFilterPage /> },
      { path: "/post-job", element: <PostJobPage /> },
    ],
  },
  {
    element: <NotFoundPage />,
    path: "/*",
  },
]);
//   return (
//     <>
//       <>
//         <Routes>
//           <Route path="/" element={<HomePage />}>
//             {" "}
//           </Route>
//           <Route path="/login" element={<LoginPage />}>
//             {" "}
//           </Route>
//           <Route path="/register" element={<RegisterPage />}>
//             {" "}
//           </Route>
//           <Route path="/profile" element={<ProfilePage />}>
//             {" "}
//           </Route>
//           <Route path="/jobs" element={<JobsListPage />}>
//             {" "}
//           </Route>
//           <Route path="/jobs/:id" element={<JobDetailsPage />}>
//             {" "}
//           </Route>
//           <Route path="/post-job" element={<PostJobPage />}>
//             {" "}
//           </Route>{" "}
//           <Route path="/*" element={<NotFoundPage />}>
//             {" "}
//           </Route>
//         </Routes>
//       </>
//     </>
//   );
// };

export default router;
