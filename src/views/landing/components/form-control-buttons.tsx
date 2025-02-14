interface FormControlButtonsProps {
  prevButtonLabel?: string
  nextButtonLabel?: string
  onPrevClick?: () => void
  onNextClick?: () => void
  setNextBtnType?: 'button' | 'submit'
}

const FormControlButtons = ({
  prevButtonLabel,
  nextButtonLabel,
  onPrevClick,
  onNextClick,
  setNextBtnType = 'button',
}: FormControlButtonsProps) => {
  return (
    <div className="w-full flex flex-col-reverse sm:flex-row items-center self-stretch gap-6">
      <button
        type="button"
        onClick={onPrevClick}
        className="w-full md:w-1/2 py-3 px-4 bg-transparent border border-[hsl(189,67%,43%)] rounded-lg"
      >
        <span className="font-jejumyeongjo text-[hsl(189,67%,43%)]">
          {prevButtonLabel ? prevButtonLabel : "Cancel"}
        </span>
      </button>
      <button
        type={setNextBtnType}
        onClick={onNextClick}
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
