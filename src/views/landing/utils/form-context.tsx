import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

type EventSectionType =
  | "ticket-selection"
  | "attendee-details"
  | "ticket-booked"

export interface EventFormProps {
  activeSection: EventSectionType
  setActiveSection: (section: EventFormProps["activeSection"]) => void

  numberOfTickets: number
  setNumberOfTickets: (numOfTickets: number) => void

  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  clearFormData: () => void
}

const EventFormContext = createContext<EventFormProps>({
  activeSection: "ticket-selection",
  setActiveSection: () => {},

  numberOfTickets: 1,
  setNumberOfTickets: () => {},

  isLoading: false,
  setIsLoading: () => {},

  clearFormData: () => {},
})

const EventFormContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeSection, setActiveSection] =
    useState<EventFormProps["activeSection"]>("ticket-selection")

  const [numberOfTickets, setNumberOfTickets] = useState(1)

  const [isLoading, setIsLoading] = useState(false)

  const clearFormData = useCallback(() => {
    setNumberOfTickets(1)
  }, [])

  const memoizedValues = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      numberOfTickets,
      setNumberOfTickets,
      isLoading,
      setIsLoading,
      clearFormData,
    }),
    [activeSection, isLoading, numberOfTickets, clearFormData]
  )

  return (
    <EventFormContext.Provider value={memoizedValues}>
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
