import React from 'react'
import TravelTourismTrainingPage from './clienttravel'

import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <TravelTourismTrainingPage/>
}
