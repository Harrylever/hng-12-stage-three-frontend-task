import { IAttendeeDetails } from "./attendee-details-context"
import { EventFormProps } from "./form-context"
import { TicketType } from "./ticket-context"

const ATTENDEE_TICKET_INFORMATION = "attendee-ticket-information"

interface IAttendeeTicketDetails {
  attendeeDetails: IAttendeeDetails
  numberOfTickets: EventFormProps["numberOfTickets"]
  ticketType: TicketType
}

export function persistAttendeeTicketDetails({
  attendeeDetails,
  numberOfTickets,
  ticketType,
}: IAttendeeTicketDetails) {
  const data = {
    attendeeDetails,
    numberOfTickets,
    ticketType,
  }

  window.localStorage.setItem(ATTENDEE_TICKET_INFORMATION, JSON.stringify(data))
}

export function fetchAttendeeTicketDetails(): IAttendeeTicketDetails | null {
  const data = window.localStorage.getItem(ATTENDEE_TICKET_INFORMATION)
  if (data) return JSON.parse(data) as IAttendeeTicketDetails
  return null
}

export function clearPersistedStorage() {
  if (!window.localStorage.getItem(ATTENDEE_TICKET_INFORMATION)) return
  window.localStorage.removeItem(ATTENDEE_TICKET_INFORMATION)
}
