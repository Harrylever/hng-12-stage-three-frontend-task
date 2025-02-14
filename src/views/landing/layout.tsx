import AttendeeDetailsContextProvider from "./utils/attendee-details"
import EventFormContextProvider from "./utils/form-context"
import TicketContextProvider from "./utils/ticket-context"

export default function LandingEventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <EventFormContextProvider>
      <AttendeeDetailsContextProvider>
        <TicketContextProvider>{children}</TicketContextProvider>
      </AttendeeDetailsContextProvider>
    </EventFormContextProvider>
  )
}
