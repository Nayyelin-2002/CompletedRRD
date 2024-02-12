import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details, { loader as loaderdata } from "./Pages/Details";
import Main from "./Pages/Main";
import Post, { loader as postsloader } from "./Pages/Post";
import Create, { action as postcreateaction } from "./Layouts/Create";
function App() {
  const routerX = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Post />,
          loader: postsloader,
        },
        {
          path: "/createposts",
          element: <Create />,
          action: postcreateaction,
        },
        {
          path: "/post-details/:id",
          element: <Details />,
          loader: loaderdata,
        },
      ],
    },
  ]);
  return <RouterProvider router={routerX} />;
}

export default App;
