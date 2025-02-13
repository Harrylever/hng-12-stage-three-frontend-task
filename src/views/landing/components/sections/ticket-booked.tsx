import FormControlButtons from "../form-control-buttons"
import SectionWrapper from "../section-wrapper"

const TicketBooked = () => {
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
          <div className="relative bg-subtract-bg w-[360px] h-[715px] bg-no-repeat mx-auto bg-center bg-contain p-8">
            <div className="w-full border-[1.5px] border-[hsl(189,67%,43%)] rounded-2xl p-[14px] flex flex-col items-center justify-start gap-5">
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
                  src="/user.png"
                  alt="User image"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full p-1 border border-[#133D44] bg-[#08343C] rounded-lg">
                <div className="w-full grid grid-cols-2">
                  <div className="flex flex-col items-start gap-1 p-2 border-r border-b border-[#12464E]">
                    <p className="text-white font-roboto text-xs opacity-[0.33]">
                      Enter your name
                    </p>
                    <p className="font-roboto text-white font-bold text-sm">
                      Avi Chukwu
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-b border-[#12464E]">
                    <p className="text-white font-roboto text-xs opacity-[0.33]">
                      Enter your email *
                    </p>
                    <p className="font-roboto text-white font-bold text-sm">
                      User@email.com
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-r border-b border-[#12464E]">
                    <p className="text-white font-roboto text-xs opacity-[0.33]">
                      Ticket Type:
                    </p>
                    <p className="font-roboto text-white font-bold text-sm">
                      VIP
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2 border-b border-[#12464E]">
                    <p className="text-white font-roboto text-xs opacity-[0.33]">
                      Ticket for:
                    </p>
                    <p className="font-roboto text-white font-bold text-sm">
                      1
                    </p>
                  </div>
                  <div className="col-span-2 flex flex-col items-start gap-1 p-2">
                    <p className="text-white font-roboto text-xs opacity-[0.33]">
                      Special request?
                    </p>
                    <p className="font-roboto text-white font-bold text-sm">
                      Nil ? Or the users sad story they write in there gets this
                      whole space, Max of three rows
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[275px]">
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
          prevButtonLabel="Book Another Ticket"
          nextButtonLabel="Download Ticket"
        />
      </div>
    </SectionWrapper>
  )
}

export default TicketBooked
