import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import InfoClass from "./components/InfoClass.js";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

import Info from "./components/Info";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // const { user, setUser } = useContext(UserContext);
  // const { user } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "Malay Chandan",
    mail: "mlychndn@gmail.com",
  });

  console.log(UserContext);

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser }}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <div className="mt-24">
            <h1>
              {user.name}-{user.mail}
            </h1>
          </div>

          {/* {<Outlet />} */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/about",
//         element: <About />,
//         errorElement: <Error />,
//         children: [
//           {
//             path: "info",
//             element: <Info name="Malay Chandan" kuchv="sikh le" />,
//           },
//         ],
//       },
//       {
//         path: "/",
//         element: <Body />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/home",
//         element: <Body />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//         errorElement: <Error />,
//       },
//       {
//         path: "/:id",
//         element: <RestaurantMenu />,
//         errorElement: <Error />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children: [
          {
            path: "info",
            element: (
              <>
                <InfoClass count="1" count2="0" child="child-1" />
                <InfoClass count="1" count2="0" child="child-2" />
              </>
            ),
            errorElement: <Error />,
          },
          // {
          //   path: "info",
          //   element: <Info />,
          //   errorElement: <Error />,
          // },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
