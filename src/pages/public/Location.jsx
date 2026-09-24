import React from 'react';
import BarStory from '@sections/location/BarStory';
import BarAtmosphere from '@sections/location/BarAtmosphere';
import InstagramFeed from '@sections/location/InstagramFeed';

export default function Location() {
  return (
    <main>
      <BarStory />
      <BarAtmosphere />
      <InstagramFeed />
    </main>
  );
}
