import { useEffect } from "react"
import toast from "react-hot-toast"
import { VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET } from "../../../config"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cloudinary: any
  }
}
interface DropzoneProps {
  imageUri: string | null
  setImageUri: (uri: string) => void
}

const uwConfig = {
  cloudName: VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: VITE_CLOUDINARY_UPLOAD_PRESET,
}

const Dropzone = ({ imageUri, setImageUri }: DropzoneProps) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const uploadWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            toast.success("Upload complete!", {
              id: "upload-toast",
              duration: 10000,
            })
            setImageUri(result.info.url)
          } else if (error) {
            toast.error("Upload failed. Please try again.", {
              id: "upload-toast",
            })
          }
        }
      )

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        () => {
          toast.loading("Uploading image", { id: "upload-toast" })
          uploadWidget.open()
        },
        false
      )
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [setImageUri])

  return (
    <div
      id="upload_widget"
      className="absolute cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[240px] w-[240px] bg-[hsl(188,69%,18%)] border-4 border-[hsla(189,67%,43%,0.5)] rounded-[32px]"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6">
        <img
          src="/cloud-download.svg"
          alt="cloud-download"
          width={32}
          height={32}
        />
        <p className="font-roboto text-center text-grey-98 select-none">
          {imageUri
            ? truncateMiddle(imageUri)
            : "Drag & drop or click to upload"}
        </p>
      </div>
    </div>
  )
}

function truncateMiddle(text: string): string {
  const maxLength = 20
  if (text.length <= maxLength) {
    return text;
  }

  const ellipsis = '...';
  const charsToShow = maxLength - ellipsis.length;
  const startLength = Math.ceil(charsToShow / 2);
  const endLength = Math.floor(charsToShow / 2);

  const start = text.slice(0, startLength);
  const end = text.slice(-endLength);

  return `${start}${ellipsis}${end}`;
}

export default Dropzone
