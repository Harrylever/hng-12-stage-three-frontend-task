import { createBrowserRouter, Navigate } from "react-router-dom"
import RootLayout from "./layout"
import LandingPage from "../views/landing"
import LandingEventsLayout from "../views/landing/layout"

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/events" replace />,
        index: true,
      },
      {
        path: "/events",
        element: (
          <LandingEventsLayout>
            <LandingPage />
          </LandingEventsLayout>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/events" />,
  },
])

export default routes
