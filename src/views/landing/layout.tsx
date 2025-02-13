import EventFormContextProvider from "./utils/form-context"

export default function LandingEventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <EventFormContextProvider>{children}</EventFormContextProvider>
}
