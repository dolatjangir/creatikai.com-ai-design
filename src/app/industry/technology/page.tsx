import React from 'react'
import TechnologyTrainingPage from './clienttech'
import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <TechnologyTrainingPage/>
}
