import React from 'react'
import AIPersonalAssistantPage from './clientPersonal'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <AIPersonalAssistantPage/>
}
