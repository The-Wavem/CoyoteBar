import React from 'react';
import Hero from '@sections/home/Hero';
import MemoriesWall from '@sections/home/MemoriesWall';
import MonthlyEvents from '@sections/home/MonthlyEvents';

export default function Home() {
  return (
    <>
      <Hero />
      <MemoriesWall />
      <MonthlyEvents />
    </>
  );
}
