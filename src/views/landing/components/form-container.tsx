import { JSX, useEffect } from "react"
import { delay } from "../../../lib/utils"
import TicketBooked from "./sections/ticket-booked"
import TicketSelection from "./sections/ticket-selection"
import AttendeeDetails from "./sections/attendee-details"
import { useTicketContext } from "../utils/ticket-context"
import { useAttendeeDetailsContext } from "../utils/attendee-details-context"
import { EventFormProps, useEventFormContext } from "../utils/form-context"
import { fetchAttendeeTicketDetails } from "../utils/persist-ticket-details"

const FormSectionsMap: Record<EventFormProps["activeSection"], JSX.Element> = {
  "ticket-selection": <TicketSelection />,
  "attendee-details": <AttendeeDetails />,
  "ticket-booked": <TicketBooked />,
}

const FormSectionsContainer = () => {
  const { activeSection, setIsLoading, setActiveSection, setNumberOfTickets } =
    useEventFormContext()

  const { setTicketType } = useTicketContext()

  const { setAttendeeDetails } = useAttendeeDetailsContext()

  useEffect(() => {
    ;(async () => {
      const attendeeTicketDetails = fetchAttendeeTicketDetails()

      if (attendeeTicketDetails) {
        setIsLoading(true)
        setTicketType(attendeeTicketDetails.ticketType)
        setNumberOfTickets(attendeeTicketDetails.numberOfTickets)
        setAttendeeDetails(attendeeTicketDetails.attendeeDetails)
        await delay(200)
        setIsLoading(false)
        setActiveSection("ticket-booked")
      }
    })()
  }, [
    setActiveSection,
    setAttendeeDetails,
    setIsLoading,
    setNumberOfTickets,
    setTicketType,
  ])

  return FormSectionsMap[activeSection]
}

export default FormSectionsContainer
