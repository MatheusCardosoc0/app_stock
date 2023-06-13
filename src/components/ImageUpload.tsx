'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { CameraIcon } from 'lucide-react'

declare global {
  var cloudinary: any
}

const uploadPreset = 'vnlyul9k'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange],
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              flex
              cursor-pointer
              flex-col
              items-center 
              justify-center 
              gap-4 
              border-2
              border-dashed
              border-neutral-300
              p-20
              text-neutral-600
              transition
              hover:opacity-70
            "
          >
            <CameraIcon size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 h-full w-full"
              >
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
