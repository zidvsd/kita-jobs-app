import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import ProfilePage from "../pages/ProfilePage";
import JobsListPage from "../pages/JobsListPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import JobsFilterPage from "../pages/JobsFilterPage";
import PostJobPage from "../pages/PostJobPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import UsersListPage from "../pages/UsersListPage";
import UserDetailsPage from "../pages/UserDetailsPage";
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signin", element: <SignInPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/jobs", element: <JobsListPage /> },
      { path: "/job/:id", element: <JobDetailsPage /> },
      { path: "/jobs/:category/:id", element: <JobsFilterPage /> },
      { path: "/users", element: <UsersListPage /> },
      { path: "/user/:id", element: <UserDetailsPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/post-job", element: <PostJobPage /> },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/post-job",
    element: (
      <ProtectedRoute>
        <PostJobPage />
      </ProtectedRoute>
    ),
  },
  {
    element: <NotFoundPage />,
    path: "/*",
  },
]);

export default router;
