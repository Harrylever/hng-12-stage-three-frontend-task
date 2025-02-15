import { FormEvent, memo, useCallback } from "react"
import { Mail } from "lucide-react"
import Dropzone from "../dropzone"
import toast from "react-hot-toast"
import { delay } from "../../../../lib/utils"
import SectionWrapper from "../section-wrapper"
import FormControlButtons from "../form-control-buttons"
import { useTicketContext } from "../../utils/ticket-context"
import { useEventFormContext } from "../../utils/form-context"
import { useAttendeeDetailsContext } from "../../utils/attendee-details-context"
import { persistAttendeeTicketDetails } from "../../utils/persist-ticket-details"

const AttendeeDetails = () => {
  const {
    numberOfTickets,
    setActiveSection,
    setIsLoading,
    clearFormData,
  } = useEventFormContext()

  const { attendeeDetails, setAttendeeDetails } = useAttendeeDetailsContext()

  const { ticketType } = useTicketContext()

  const handleSetAttendeeDetails = useCallback(
    (name: string) => (value: string) => {
      setAttendeeDetails({
        ...attendeeDetails,
        [name]: value,
      })
    },
    [attendeeDetails, setAttendeeDetails]
  )

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!attendeeDetails.imageUri) {
      toast.error("Set an image")
      return
    }

    if (!attendeeDetails.name.length) {
      toast.error("Enter your name")
      return
    }

    if (!attendeeDetails.email.length) {
      toast.error("Enter your email")
      return
    }

    setIsLoading(true)
    await delay()
    persistAttendeeTicketDetails({
      attendeeDetails,
      numberOfTickets,
      ticketType,
    })
    setIsLoading(false)
    setActiveSection("ticket-booked")
  }

  const handleBackClick = () => {
    clearFormData()
    setActiveSection("ticket-selection")
  }

  return (
    <SectionWrapper>
      <form
        onSubmit={handleSubmit}
        className="w-full h-fit flex flex-col gap-8 rounded-[32px] bg-transparent sm:bg-[hsla(190,69%,10%)] border border-transparent sm:border-[hsla(188,69%,18%)] p-0 sm:p-6"
      >
        <div className="w-full pt-6 px-6 pb-12 flex flex-col gap-8 bg-transparent sm:bg-[hsl(190,78%,9%)] border border-[hsl(189,80%,14%)] rounded-3xl">
          <p className="text-grey-98 font-roboto">Upload Profile Photo</p>
          <div className="relative w-full bg-[hsla(0,0%,0%,0.2)] self-stretch h-[200px]">
            <Dropzone
              imageUri={attendeeDetails.imageUri}
              setImageUri={(imageUri) =>
                handleSetAttendeeDetails("imageUri")(imageUri)
              }
            />
          </div>
        </div>

        {/* Separator */}
        <div className="w-full self-stretch h-[4px] bg-[hsl(189,80%,14%)]"></div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="fullname" className="font-roboto text-grey-98">
            Enter your name
          </label>
          <div className="w-full">
            <input
              required
              type="text"
              name="fullname"
              id="fullname"
              className="w-full p-3 bg-transparent border border-[hsl(189,80%,14%)] focus:outline-none rounded-xl text-white font-roboto"
              value={attendeeDetails.name}
              onChange={(e) => handleSetAttendeeDetails("name")(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="font-roboto text-grey-98">
            Enter your email <sup>*</sup>
          </label>

          <div className="w-full p-3 border border-[hsl(189,80%,14%)] rounded-xl flex items-center gap-2 self-stretch">
            <Mail className="text-white" />
            <input
              required
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-none focus:outline-none text-white font-roboto"
              value={attendeeDetails.email}
              onChange={(e) =>
                handleSetAttendeeDetails("email")(e.target.value)
              }
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="font-roboto text-grey-98">
            Special request?
          </label>

          <div className="w-full">
            <textarea
              name="email"
              id="email"
              className="w-full bg-transparent border border-[hsl(189,80%,14%)] focus:outline-none text-white font-roboto min-h-[127px] p-3 rounded-xl placeholder:text-[hsl(0,0%,67%)]"
              placeholder="Textarea"
              value={attendeeDetails.specialRequest}
              onChange={(e) =>
                handleSetAttendeeDetails("specialRequest")(e.target.value)
              }
            ></textarea>
          </div>
        </div>

        <FormControlButtons
          prevButtonLabel="Back"
          nextButtonLabel="Get My Free Ticket"
          setNextBtnType="submit"
          onPrevClick={handleBackClick}
        />
      </form>
    </SectionWrapper>
  )
}

export default memo(AttendeeDetails)
