import { EventFormProps } from "./form-context"

const ATTENDEE_TICKET_INFORMATION = "attendee-ticket-information"

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

interface IAttendeeTicketDetails {
  attendeeDetails: EventFormProps["attendeeDetails"]
  numberOfTickets: EventFormProps["numberOfTickets"]
  ticketType: EventFormProps["ticketType"]
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
