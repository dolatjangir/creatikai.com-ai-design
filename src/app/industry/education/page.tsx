import React from 'react'
import EducationTrainingPage from './clientEducation'
import { generateSEOMetadata } from '../../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;
export default function page() {
  return <EducationTrainingPage/>
}
