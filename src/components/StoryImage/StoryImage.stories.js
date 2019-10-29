import React from 'react';

import { FullWidthImage, SplitImage, TwoThirdsImage, FiftyFiftyImage } from '.';

export default { title: 'Story Image' };

export const fullWidthImage = () => <FullWidthImage />;

export const splitImage = () => (
  <SplitImage
    caption="Donec luctus mauris nec nibh tristique, posuere auctor mi condimentum."
    images={['image_1.jpeg', 'image_2.jpeg']}
  />
);

export const twoThirdsImage = () => <TwoThirdsImage />;

export const fiftyFiftyImage = () => <FiftyFiftyImage images={['image_1.jpeg', 'image_2.jpeg']} />;
