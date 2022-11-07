import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { key: "/blog", path: "/blogs/:id", element: <Blog /> },
  { key: "/post", path: "/post/:id([0-9]+)?", element: <PostPage /> },
  { key: "/about-us", path: "/about-us", element: <AboutUs /> },
  { key: "/profile", path: "/profile/*", element: <Profile /> },
  { key: "/blogs", path: "/blogs", element: <BlogPage /> },
  { key: "/", path: "/", element: <Home /> },
  { key: "*", element: <NotFound /> },
];

export default routes;
