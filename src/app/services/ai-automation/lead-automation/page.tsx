import React from 'react'
import LeadAutomationPage from './clientLead'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <LeadAutomationPage/>
}
