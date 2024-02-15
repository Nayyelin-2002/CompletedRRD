import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details, { loader as loaderDetaildata } from "./Pages/Details";
import Main from "./Pages/Main";
import Post, { loader as postsloader } from "./Pages/Post";
import { action as postcreateaction } from "./Components/Postform";
import { action as postupdateaction } from "./Components/Postform";
import Edit from "./Pages/Edit";
import { action as deletepostaction } from "./Pages/Details";
import Error from "./Pages/Error";
import Create from "./Layouts/Create";
function App() {
  const routerX = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
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
          path: ":id",
          id: "postdetail", //kyite tr  payy
          loader: loaderDetaildata,
          children: [
            {
              index: true,
              element: <Details />,
              action: deletepostaction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: postupdateaction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routerX} />;
}

export default App;
