import { EventFormProps, useEventFormContext } from "../utils/form-context"

const SectionLabelMap: Record<
  EventFormProps["activeSection"],
  { label: string; step: number }
> = {
  "ticket-selection": { label: "Ticket Selection", step: 1 },
  "attendee-details": { label: "Attendee Details", step: 2 },
  "ticket-booked": { label: "Ready", step: 3 },
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { activeSection } = useEventFormContext()

  return (
    <div className="px-8">
      <div className="w-full max-w-[700px] mx-auto p-6 sm:p-12 border border-[hsl(188,70%,18%)] bg-[hsl(189,79%,8%)] rounded-[40px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="w-full pb-2 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-y-3">
              <h3 className="font-jejumyeongjo text-3xl font-normal text-white">
                {SectionLabelMap[activeSection].label}
              </h3>

              <p className="leading-6 font-roboto text-grey-98">
                {"Step " + `${SectionLabelMap[activeSection].step}/3`}
              </p>
            </div>
            <div className="w-full bg-[hsl(188,69%,18%)] rounded-[5px] h-[4px]">
              <div className="w-[40%] h-full bg-[hsl(189,67%,43%)]"></div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper
