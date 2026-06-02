import React from 'react'
import VideoCreationPage from './clientvideo'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <VideoCreationPage/>
}
