import React from 'react';
import Hero from '@sections/home/Hero';
import UpcomingShows from '@sections/home/UpcomingShows';
import MonthlyEvents from '@sections/home/MonthlyEvents';
import MemoriesWall from '@sections/home/MemoriesWall';

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingShows />
      <MonthlyEvents />
      <MemoriesWall />
    </>
  );
}
