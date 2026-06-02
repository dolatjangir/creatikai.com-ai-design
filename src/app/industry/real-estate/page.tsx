import React from 'react'
import RealEstateTrainingPage from './clientEstate'
import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <RealEstateTrainingPage/>
}
