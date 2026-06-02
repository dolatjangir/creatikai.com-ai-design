import React from 'react'
import AIToolsCoursePage from './clientTools'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <AIToolsCoursePage/>
}
