import { createContext, useContext, useMemo, useState } from "react"

export interface IAttendeeDetails {
  imageUri: string | null
  name: string
  email: string
  specialRequest: string
}

export interface AttendeeDetailsContextProps {
  attendeeDetails: IAttendeeDetails
  setAttendeeDetails: (details: IAttendeeDetails) => void
  resetAttendeeDetails: () => void
}

const AttendeeDetailsContext = createContext<AttendeeDetailsContextProps>({
  attendeeDetails: {
    name: "",
    email: "",
    specialRequest: "",
    imageUri: null,
  },
  setAttendeeDetails: () => {},
  resetAttendeeDetails: () => {},
})

const AttendeeDetailsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [attendeeDetails, setAttendeeDetails] = useState<IAttendeeDetails>({
    name: "",
    email: "",
    specialRequest: "",
    imageUri: null,
  })

  const resetAttendeeDetails = () =>
    setAttendeeDetails({
      name: "",
      email: "",
      specialRequest: "",
      imageUri: null,
    })

  const values = useMemo(
    () => ({ attendeeDetails, setAttendeeDetails, resetAttendeeDetails }),
    [attendeeDetails]
  )

  return (
    <AttendeeDetailsContext.Provider value={values}>
      {children}
    </AttendeeDetailsContext.Provider>
  )
}

export const useAttendeeDetailsContext = () => {
  const context = useContext(AttendeeDetailsContext)

  if (!context) {
    throw new Error(
      "useAttendeeDetailsContext must be used within AttendeeDetailContextProvider"
    )
  }

  return context
}

export default AttendeeDetailsContextProvider
