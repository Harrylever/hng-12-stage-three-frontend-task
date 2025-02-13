import { createContext, useContext, useState } from "react"

type EventSectionType =
  | "ticket-selection"
  | "attendee-details"
  | "ticket-booked"

export interface EventFormProps {
  activeSection: EventSectionType
  setActiveSection: (section: EventFormProps["activeSection"]) => void
}

const EventFormContext = createContext<EventFormProps>({
  activeSection: "ticket-selection",
  setActiveSection: () => {},
})

const EventFormContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeSection, setActiveSection] =
    useState<EventFormProps["activeSection"]>("ticket-selection")

  return (
    <EventFormContext.Provider value={{ activeSection, setActiveSection }}>
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
