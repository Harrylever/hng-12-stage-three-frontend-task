import { useEffect, useState } from "react"

const BottomSpacingDiv = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  const handleSetHeaderHeight = () => {
    const header = document.querySelector("#app-header") as HTMLElement
    if (!header) return

    setHeaderHeight(header.getBoundingClientRect().height + 24)
    return
  }

  useEffect(() => {
    window.addEventListener("resize", handleSetHeaderHeight)

    handleSetHeaderHeight()

    return () => {
      window.removeEventListener("resize", handleSetHeaderHeight)
    }
  }, [])

  return <div style={{ height: headerHeight }}></div>
}

export default BottomSpacingDiv
