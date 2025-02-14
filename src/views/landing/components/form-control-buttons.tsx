import { useEventFormContext } from "../utils/form-context"

interface FormControlButtonsProps {
  prevButtonLabel?: string
  nextButtonLabel?: string
}

const FormControlButtons = ({
  prevButtonLabel,
  nextButtonLabel,
}: FormControlButtonsProps) => {
  const { activeSection, setActiveSection } = useEventFormContext()

  const handleSetPrevActiveSection = () => {
    switch (activeSection) {
      case "ticket-selection":
        break
      case "attendee-details":
        setActiveSection("ticket-selection")
        return
      case "ticket-booked":
        setActiveSection("attendee-details")
        return
      default:
        return
    }
  }

  const handleSetNextActiveSection = () => {
    switch (activeSection) {
      case "ticket-selection":
        setActiveSection("attendee-details")
        return
      case "attendee-details":
        setActiveSection("ticket-booked")
        return
      case "ticket-booked":
        break
      default:
        return
    }
  }

  return (
    <div className="w-full flex flex-col-reverse sm:flex-row items-center self-stretch gap-6">
      <button
        type="button"
        onClick={handleSetPrevActiveSection}
        className="w-full md:w-1/2 py-3 px-4 bg-transparent border border-[hsl(189,67%,43%)] rounded-lg"
      >
        <span className="font-jejumyeongjo text-[hsl(189,67%,43%)]">
          {prevButtonLabel ? prevButtonLabel : "Cancel"}
        </span>
      </button>
      <button
        type="button"
        onClick={handleSetNextActiveSection}
        className="w-full md:w-1/2 py-3 px-4 bg-[hsl(189,67%,43%)] border border-[hsl(189,67%,43%)] rounded-lg"
      >
        <span className="font-jejumyeongjo text-white">
          {nextButtonLabel ? nextButtonLabel : "Next"}
        </span>
      </button>
    </div>
  )
}

export default FormControlButtons
