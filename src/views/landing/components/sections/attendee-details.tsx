import { Mail } from "lucide-react"
import SectionWrapper from "../section-wrapper"
import FormControlButtons from "../form-control-buttons"

const AttendeeDetails = () => {
  return (
    <SectionWrapper>
      <form className="w-full h-fit flex flex-col gap-8 rounded-[32px] bg-transparent sm:bg-[hsla(190,69%,10%)] border border-transparent sm:border-[hsla(188,69%,18%)] p-0 sm:p-6">
        <div className="w-full pt-6 px-6 pb-12 flex flex-col gap-8 bg-transparent sm:bg-[hsl(190,78%,9%)] border border-[hsl(189,80%,14%)] rounded-3xl">
          <p className="text-grey-98 font-roboto">Upload Profile Photo</p>
          <div className="relative w-full bg-[hsla(0,0%,0%,0.2)] self-stretch h-[200px]">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[240px] w-[240px] bg-[hsl(188,69%,18%)] border-4 border-[hsla(189,67%,43%,0.5)] rounded-[32px]">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6">
                <img
                  src="/cloud-download.svg"
                  alt="cloud-download"
                  width={32}
                  height={32}
                />
                <p className="font-roboto text-center text-grey-98">
                  Drag & drop or click to upload
                </p>
              </div>
            </div>
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
              type="text"
              name="fullname"
              id="fullname"
              className="w-full p-3 bg-transparent border border-[hsl(189,80%,14%)] focus:outline-none rounded-xl text-white font-roboto"
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
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-none focus:outline-none text-white font-roboto"
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
            ></textarea>
          </div>
        </div>

        <FormControlButtons prevButtonLabel="Back" nextButtonLabel="Get My Free Ticket" />
      </form>
    </SectionWrapper>
  )
}

export default AttendeeDetails
