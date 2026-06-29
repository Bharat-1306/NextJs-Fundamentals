'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && <p className="m-0 p-4">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className="border-0 px-6 py-2 bg-[#a4abb9] rounded-sm cursor-pointer font-[inherit] hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}