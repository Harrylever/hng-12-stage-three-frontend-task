import { useState } from "react"
import { cn } from "../../../../lib/utils"
import { ChevronDown } from "lucide-react"
import SectionWrapper from "../section-wrapper"
import FormControlButtons from "../form-control-buttons"

const TicketSelection = () => {
  return (
    <SectionWrapper>
      <div className="w-full h-fit flex flex-col gap-8 rounded-[32px] bg-[hsla(190,69%,10%)] border border-[hsla(188,69%,18%)] p-6">
        {/* Event Info Section */}
        <div className="w-full flex flex-col gap-2 border-x-2 border-b-2 border-[hsl(189,80%,14%)] p-6 rounded-3xl event-info-section text-center">
          <h3 className="text-6xl font-normal font-road-rage text-grey-98">
            Techember Fest ”25
          </h3>
          <p className="font-roboto text-base font-normal text-grey-98">
            Join us for an unforgettable experience at <br /> [Event Name]!
            Secure your spot now.
          </p>
          <p className="font-roboto text-grey-98">
            📍 [Event Location] <span className="mx-2">&#124; &#124;</span>
            March 15, 2025 <span className="mx-0">&#124;</span> 7:00 PM
          </p>
        </div>

        {/* Separator */}
        <div className="w-full self-stretch h-[4px] bg-[hsl(189,80%,14%)]"></div>

        <div className="flex flex-col gap-2 items-start self-stretch">
          <p className="text-base font-roboto font-normal text-grey-98">
            Select Ticket Type:
          </p>

          <div className="flex flex-col p-4 items-center justify-center gap-4 self-stretch border border-[hsl(189,80%,14%)] rounded-3xl bg-[hsl(190,78%,9%)]">
            <div className="w-full flex items-start justify-between self-stretch content-start gap-x-6">
              {TICKET_TYPES.map((type) => (
                <TicketTypeTab key={type.id} type={type} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 self-stretch items-start">
          <p className="font-roboto text-grey-98">Number of Tickets</p>
          <NumberOfTickets />
        </div>

        <FormControlButtons />
      </div>
    </SectionWrapper>
  )
}

const NumberOfTickets = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [numberOfTickets, setNumberOfTickets] = useState(1)

  const handleSetNumberOfTickets = (numOfTickets: number) => {
    setNumberOfTickets(numOfTickets)
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border border-[hsl(189,80%,14%)] rounded-xl text-white flex items-center justify-between"
      >
        <p className="font-roboto">{numberOfTickets}</p>
        <ChevronDown
          className={cn("duration-300", {
            "-rotate-180": isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className="w-full absolute top-[calc(100%+5px)] border border-[hsl(189,80%,14%)] flex flex-col gap-2 self-stretch gap-y-0.5 rounded-lg overflow-hidden bg-[hsl(189,80%,14%)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleSetNumberOfTickets(i + 1)}
              className={cn(
                "w-full p-3 border border-[hsl(189,80%,14%)] text-left",
                {
                  "bg-grey-98 text-[hsl(189,80%,14%)]":
                    numberOfTickets === i + 1,
                  "bg-[hsl(189,80%,14%)] text-white": numberOfTickets !== i + 1,
                }
              )}
            >
              <span className="font-roboto">{i + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const TicketTypeTab = ({
  type,
  activeId = 1,
}: {
  type: { id: number; cost: string; description: string; label: string }
  activeId?: number
}) => {
  return (
    <div
      className={cn(
        "w-full min-w-1/3 flex flex-col p-3 items-start gap-3 rounded-xl border-[hsl(189,69%,31%)]",
        activeId === type.id
          ? "border bg-[hsl(188,62%,19%)]"
          : "border-2 bg-transparent"
      )}
    >
      <h4 className="text-white font-roboto text-2xl font-semibold capitalize">
        {type.cost}
      </h4>
      <p className="font-roboto text-sm">{type.description}</p>
      <small className="font-roboto text-sm">{type.label}</small>
    </div>
  )
}

const TICKET_TYPES = [
  {
    id: 1,
    cost: "free",
    description: "REGULAR ACCESS",
    label: "20/52",
  },
  { id: 2, cost: "$150", description: "VIP ACCESS", label: "20/52" },
  { id: 3, cost: "$150", description: "VVIP ACCESS", label: "20/52" },
] as const

export default TicketSelection
