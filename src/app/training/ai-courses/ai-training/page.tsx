import React from 'react'
import AITrainingPage from './clientai'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <AITrainingPage/>
}
