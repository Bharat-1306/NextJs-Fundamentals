'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/images/burger.jpg';
import curryImg from '@/assets/images/curry.jpg';
import dumplingsImg from '@/assets/images/dumplings.jpg';
import macncheeseImg from '@/assets/images/macncheese.jpg';
import pizzaImg from '@/assets/images/pizza.jpg';
import schnitzelImg from '@/assets/images/schnitzel.jpg';
import tomatoSaladImg from '@/assets/images/tomato-salad.jpg';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate through images every 5 seconds by incrementing the index,
  // looping back to 0 when reaching the end of the images array
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out ${
            index === currentImageIndex
              ? 'z-1 opacity-100 scale-100 translate-x-0 rotate-0'
              : 'opacity-0 scale-110 -translate-x-4 rotate-[-5deg]'
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}