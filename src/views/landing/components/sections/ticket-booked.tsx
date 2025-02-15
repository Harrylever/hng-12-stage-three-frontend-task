import toast from "react-hot-toast"
import SectionWrapper from "../section-wrapper"
import { useToPng } from "@hugocxl/react-to-image"
import FormControlButtons from "../form-control-buttons"
import { useTicketContext } from "../../utils/ticket-context"
import { useEventFormContext } from "../../utils/form-context"
import { useAttendeeDetailsContext } from "../../utils/attendee-details"
import { clearPersistedStorage } from "../../utils/persist-ticket-details"

const TicketBooked = () => {
  const { clearFormData, numberOfTickets, setActiveSection } =
    useEventFormContext()

  const { ticketType, resetTicketType } = useTicketContext()

  const { attendeeDetails, resetAttendeeDetails } = useAttendeeDetailsContext()

  const handleBookAnotherTicket = () => {
    const response = confirm("Are you sure you want to leave?")
    if (!response) return
    clearFormData()
    resetTicketType()
    resetAttendeeDetails()
    clearPersistedStorage()
    setActiveSection("ticket-selection")
  }

  const [, convertToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess(data) {
      const link = document.createElement("a")
      link.download = "TICZ-TICKET.png"
      link.href = data
      link.click()
      toast.dismiss()
    },
    onLoading() {
      toast.loading("Please wait...")
    },
  })

  const handleDownloadTicket = () => {
    convertToPng()
  }

  return (
    <SectionWrapper>
      <div className="w-full h-fit flex flex-col gap-8">
        <div className="w-full text-center flex flex-col items-center gap-4 pb-8">
          <h3 className="font-alatsi text-[32px] text-white">
            Your Ticket is Booked
          </h3>
          <p className="font-roboto text-grey-98">
            Check your email for a copy or you can download
          </p>
        </div>

        <div className="py-8 w-full flex items-center justify-center">
          <div
            ref={ref}
            className="relative bg-subtract-bg w-[360px] h-[600px] sm:h-[715px] bg-no-repeat mx-auto bg-center bg-contain p-8"
          >
            <div className="w-full border-[1.5px] border-[hsl(189,67%,43%)] rounded-2xl p-[14px] flex flex-col items-center justify-start gap-5 scale-90 sm:scale-100">
              <div className="w-full text-center flex flex-col items-center">
                <h3 className="text-[34px] font-normal font-road-rage text-grey-98">
                  Techember Fest ”25
                </h3>

                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-white font-roboto text-xs">
                    📍 04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p className="text-white font-roboto text-xs">
                    📅 March 15, 2025 | 7:00 PM
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <img
                  src={attendeeDetails.imageUri ?? "/user.png"}
                  alt={`${attendeeDetails.name} image`}
                  width={100}
                  height={100}
                  className="relative max-w-[120px] max-h-[120px] object-cover"
                />
              </div>
              <div className="w-full p-1 border border-[#133D44] bg-[#08343C] rounded-lg">
                <div className="w-full grid grid-cols-2">
                  <div className="flex flex-col items-start gap-1 p-2 border-r border-b border-[#12464E]">
                    <p className="text-white font-roboto text-[10px] sm:text-xs opacity-[0.33]">
                      Enter your name
                    </p>
                    <p className="font-roboto text-white font-medium sm:font-bold text-[10px] sm:text-sm break-all capitalize">
                      {attendeeDetails.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-b border-[#12464E]">
                    <p className="text-white font-roboto  text-[10px] sm:text-xs opacity-[0.33]">
                      Enter your email *
                    </p>
                    <p className="font-roboto text-white font-medium sm:font-bold text-[10px] sm:text-sm break-all lowercase">
                      {attendeeDetails.email}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-r border-b border-[#12464E]">
                    <p className="text-white font-roboto  text-[10px] sm:text-xs opacity-[0.33]">
                      Ticket Type:
                    </p>
                    <p className="font-roboto text-white font-medium sm:font-bold text-[10px] sm:text-sm uppercase">
                      {ticketType}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-b border-[#12464E]">
                    <p className="text-white font-roboto  text-[10px] sm:text-xs opacity-[0.33]">
                      Ticket for:
                    </p>
                    <p className="font-roboto text-white font-medium sm:font-bold text-[10px] sm:text-sm">
                      {numberOfTickets}
                    </p>
                  </div>
                  <div className="col-span-2 flex flex-col items-start gap-1 p-2">
                    <p className="text-white font-roboto  text-[10px] sm:text-xs opacity-[0.33]">
                      Special request?
                    </p>
                    <p className="font-roboto text-white font-bold  text-[10px] sm:text-sm">
                      {attendeeDetails.specialRequest}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 sm:bottom-7 left-1/2 -translate-x-1/2 w-[190px] sm:w-[240px]">
              <img
                src="/bar-code.svg"
                alt="Bar Code"
                width={"100%"}
                height={"100%"}
                className=""
              />
            </div>
          </div>
        </div>

        <FormControlButtons
          onPrevClick={handleBookAnotherTicket}
          onNextClick={handleDownloadTicket}
          prevButtonLabel="Book Another Ticket"
          nextButtonLabel="Download Ticket"
        />
      </div>
    </SectionWrapper>
  )
}

export default TicketBooked
