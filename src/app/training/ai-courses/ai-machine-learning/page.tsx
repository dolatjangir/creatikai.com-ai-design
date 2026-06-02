import React from 'react'
import AIMachineLearningPage from './clientmachine'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <AIMachineLearningPage/>
}
