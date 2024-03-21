// import { createBrowserRouter, createHashRouter } from "react-router-dom";

// import Home from "../components/Home/Home";
// import Questions from "../components/Questions/Questions";
// import Materials from "../components/Materials/Materials";
// import Contacts from "../components/Contacts/Contacts";
// import App from "../App";

// const router =  createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     path: "/questions",
//     element: <Questions />,
//   },
//   {
//     path: "/materials",
//     element: <Materials />,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts/>,
//   },
// ]);

// export default router;

import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import Questions from "../components/Questions/Questions";
import Materials from "../components/Materials/Materials";
import Contacts from "../components/Contacts/Contacts";

 const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />

        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "/questions", element: <Questions /> },
      { path: "/materials", element: <Materials /> },
      { path: "/contacts", element: <Contacts /> },

    ],
  },
]);

export default router;
