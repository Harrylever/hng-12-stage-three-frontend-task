import { JSX } from "react"
import TicketBooked from "./sections/ticket-booked"
import TicketSelection from "./sections/ticket-selection"
import AttendeeDetails from "./sections/attendee-details"
import { EventFormProps, useEventFormContext } from "../utils/form-context"

const FormSectionsMap: Record<EventFormProps["activeSection"], JSX.Element> = {
  "ticket-selection": <TicketSelection />,
  "attendee-details": <AttendeeDetails />,
  "ticket-booked": <TicketBooked />,
}

const FormSectionsContainer = () => {
  const { activeSection } = useEventFormContext()

  return FormSectionsMap[activeSection]
}

export default FormSectionsContainer
