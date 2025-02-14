import { useState } from "react"
import DropzoneComponent from "react-dropzone"
import toast from "react-hot-toast"

interface DropzoneProps {
  imageUri: string | null
  setImageUri: (uri: string) => void
}

const Dropzone = ({ imageUri, setImageUri }: DropzoneProps) => {
  const [imageName, setImageName] = useState<string | null>(null)

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (!file) return

    const reader = new FileReader()

    reader.onabort = () => toast.error("file reading was aborted")
    reader.onerror = () => toast.error("file reading has failed")

    reader.onload = () => {
      setImageName(file.name)
      setImageUri(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  // max file size is 1MB
  const maxSize = 1258291.2

  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      maxFiles={1}
      onDrop={onDrop}
      accept={{
        "image/png": [".png"],
        "image/jpg": [".jpg", ".jpeg"],
      }}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize

        return (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[240px] w-[240px] bg-[hsl(188,69%,18%)] border-4 border-[hsla(189,67%,43%,0.5)] rounded-[32px]">
            <div
              {...getRootProps()}
              className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
            >
              <img
                src="/cloud-download.svg"
                alt="cloud-download"
                width={32}
                height={32}
              />
              <input {...getInputProps()} />
              <p className="font-roboto text-center text-grey-98">
                {!isDragActive &&
                  !isDragReject &&
                  !imageName &&
                  "Drag & drop or click to upload"}
                {isDragActive && !isDragReject && "Drop to upload this file!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && "File is too large! Max size is 1 MB"}
                {imageUri && imageName}
              </p>
            </div>
          </div>
        )
      }}
    </DropzoneComponent>
  )
}

export default Dropzone
