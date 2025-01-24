'use client';

import { MovieType } from '@/types';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

interface SlideProps {
  slide: MovieType;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (slideRef.current) {
        slideRef.current.style.setProperty('--x', `${xRef.current}px`);
        slideRef.current.style.setProperty('--y', `${yRef.current}px`);
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (slideRef.current) {
      const rect = slideRef.current.getBoundingClientRect();
      xRef.current = event.clientX - (rect.left + rect.width / 2);
      yRef.current = event.clientY - (rect.top + rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <li
      ref={slideRef}
      className="flex flex-col justify-end items-start relative opacity-100 transition-all duration-300 ease-in-out w-full min-w-full h-[65vmin] z-10 rounded-[1%] overflow-hidden"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: current === index ? 'scale(1) rotateX(0deg)' : 'scale(0.98) rotateX(8deg)',
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Link href={`/${slide.movieId}`}>
        <div
          className="absolute inset-0 w-full h-full bg-[#1D1F2F] transition-all duration-150 ease-out"
          style={{
            transform: current === index ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)' : 'none',
          }}
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover object-center opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={slide.Title}
            src={slide.Cover}
            fill
          />
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">{slide.Title}</h2>
          <p>
            {slide.Country} - {slide.Release}
          </p>
        </article>
      </Link>
    </li>
  );
};

interface CarouselControlProps {
  type: 'previous' | 'next';
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    className={`w-10 h-10 flex items-center justify-center mx-2 bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === 'previous' ? 'rotate-180' : ''
    }`}
    title={title}
    onClick={handleClick}
  >
    <IconArrowNarrowRight className="text-neutral-200" />
  </button>
);

interface CarouselProps {
  slides: MovieType[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div className="w-full flex flex-col gap-3" aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="flex items-center transition-transform duration-1000 ease-in-out relative"
        style={{ transform: `translateX(-${100 * current}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>

      <div className="flex justify-center w-full">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}
