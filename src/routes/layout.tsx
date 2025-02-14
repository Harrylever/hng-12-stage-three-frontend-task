import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

export default function RootLayout() {
  return (
    <Fragment>
      <Outlet />
      <Toaster />
    </Fragment>
  )
}
