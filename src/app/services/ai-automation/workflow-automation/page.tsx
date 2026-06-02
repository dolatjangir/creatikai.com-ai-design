import React from 'react'
import WorkflowAutomationPage from './clientWorkflow'
import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <WorkflowAutomationPage/>
}
