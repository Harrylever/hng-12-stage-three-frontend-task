import { createContext, useContext, useMemo, useState } from "react"

export type TicketType = "FREE" | "VIP" | "VVIP"

export interface TicketContextProps {
  ticketType: TicketType
  setTicketType: (type: TicketType) => void
  resetTicketType: () => void
}

const TicketContext = createContext<TicketContextProps>({
  ticketType: "FREE",
  setTicketType: () => {},
  resetTicketType: () => {},
})

const TicketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ticketType, setTicketType] = useState<TicketType>("FREE")

  const resetTicketType = () => setTicketType("FREE")

  const values = useMemo(
    () => ({
      ticketType,
      setTicketType,
      resetTicketType,
    }),
    [ticketType]
  )

  return (
    <TicketContext.Provider value={values}>{children}</TicketContext.Provider>
  )
}

export const useTicketContext = () => {
  const context = useContext(TicketContext)

  if (!context) {
    throw new Error(
      "useTicketContext must be used within TicketContextProvider"
    )
  }

  return context
}

export default TicketContextProvider
