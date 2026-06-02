import React from 'react'
import BusinessAutomationPage from './clientAutomation'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <BusinessAutomationPage/>
}
