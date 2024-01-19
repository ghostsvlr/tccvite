import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPage from "./components/PostPage";
import PostList from "./components/PostList";
import AuthLogin from "./components/Auth/Login";
import AuthRegister from "./components/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <AuthLogin onSwitchToRegister={() => {}} />,
      },
      {
        path: "/register",
        element: <AuthRegister onSwitchToLogin={() => {}} />,
      },
      {
        path: "/",
        element: <PostPage />,
      },
      {
        path: "/posts",
        element: <PostList posts={[]} />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
