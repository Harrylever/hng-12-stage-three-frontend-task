import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
// import SmoothScroll from "../components/ui/smooth-scroll"

export default function RootLayout() {
  return (
    <Fragment>
      <Outlet />
      <Toaster />
    </Fragment>
  )
}
