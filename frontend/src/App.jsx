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
import Atuh from "./Pages/Atuh";
import { loader as logoutloader } from "./Pages/Logout";
import { action as authAction } from "./Pages/Atuh";
import { checkTokenLoader, tokenloader } from "./util/getToken";
function App() {
  const routerX = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: tokenloader, //loader ka data ko hlan u phoh id htoke
      id: "root",
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
          loader: checkTokenLoader,
        },
        {
          path: "/auth",
          element: <Atuh />,
          action: authAction,
        },
        {
          path: "/logout",
          loader: logoutloader,
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
              loader: checkTokenLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routerX} />;
}

export default App;
