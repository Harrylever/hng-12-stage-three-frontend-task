import { createContext, useContext, useState } from "react"

type EventSectionType =
  | "ticket-selection"
  | "attendee-details"
  | "ticket-booked"

type TicketType = "FREE" | "VIP" | "VVIP"
export interface EventFormProps {
  activeSection: EventSectionType
  setActiveSection: (section: EventFormProps["activeSection"]) => void

  ticketType: TicketType
  setTicketType: (type: EventFormProps["ticketType"]) => void

  numberOfTickets: number
  setNumberOfTickets: (numOfTickets: number) => void

  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  attendeeDetails: {
    imageUri: string | null
    name: string
    email: string
    specialRequest: string
  }
  setAttendeeDetails: (details: EventFormProps["attendeeDetails"]) => void

  clearFormData: () => void
}

const EventFormContext = createContext<EventFormProps>({
  activeSection: "ticket-selection",
  setActiveSection: () => {},

  ticketType: "FREE",
  setTicketType: () => {},

  numberOfTickets: 1,
  setNumberOfTickets: () => {},

  isLoading: false,
  setIsLoading: () => {},

  attendeeDetails: {
    imageUri: null,
    name: "",
    email: "",
    specialRequest: "",
  },
  setAttendeeDetails: () => {},

  clearFormData: () => {}
})

const EventFormContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeSection, setActiveSection] =
    useState<EventFormProps["activeSection"]>("ticket-selection")

  const [ticketType, setTicketType] =
    useState<EventFormProps["ticketType"]>("FREE")

  const [numberOfTickets, setNumberOfTickets] = useState(1)

  const [isLoading, setIsLoading] = useState(false)

  const [attendeeDetails, setAttendeeDetails] = useState<
    EventFormProps["attendeeDetails"]
  >({
    imageUri: null,
    name: "",
    email: "",
    specialRequest: "",
  })

  const clearFormData = () => {
    setTicketType('FREE')
    setNumberOfTickets(1)
    setAttendeeDetails({
      imageUri: null,
      name: "",
      email: "",
      specialRequest: "",
    })
  }

  return (
    <EventFormContext.Provider
      value={{
        activeSection,
        setActiveSection,
        ticketType,
        setTicketType,
        numberOfTickets,
        setNumberOfTickets,
        isLoading,
        setIsLoading,
        attendeeDetails,
        setAttendeeDetails,
        clearFormData,
      }}
    >
      {children}
    </EventFormContext.Provider>
  )
}

export const useEventFormContext = () => {
  const context = useContext(EventFormContext)

  if (!context) {
    throw new Error(
      "useEventFormContext must be used within EventFormContextProvider"
    )
  }

  return context
}

export default EventFormContextProvider
