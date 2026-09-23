import React from 'react';
import Hero from '@sections/home/Hero';
import DayNightExperience from '@sections/home/DayNightExperience';
import WeeklySchedule from '@sections/home/WeeklySchedule';

export default function Home() {
  return (
    <>
      <Hero />
      <DayNightExperience />
      <WeeklySchedule />
    </>
  );
}
