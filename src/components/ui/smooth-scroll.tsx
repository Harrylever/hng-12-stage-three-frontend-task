import { ReactLenis, LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"
import { cancelFrame, frame } from "motion"

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }
    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      ref={lenisRef as unknown as React.RefObject<LenisRef>}
      options={{ duration: 1, smoothWheel: true }}
      root
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll