import React from 'react'
import HealthcareTrainingPage from './clienthealthcare'
import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <HealthcareTrainingPage/>
}
