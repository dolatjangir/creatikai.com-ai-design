import React from 'react'
import GoogleAdsTrainingPage from './clientads'

import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <GoogleAdsTrainingPage/>
}
