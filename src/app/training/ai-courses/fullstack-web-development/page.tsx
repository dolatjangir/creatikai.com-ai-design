import React from 'react'
import FullStackTrainingPage from './clientweb'


import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <FullStackTrainingPage/>
}
