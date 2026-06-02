import React from 'react'
import HelpCenterPage from './clientHelp'
import { generateSEOMetadata } from '../../../../lib/seometadata';
export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <HelpCenterPage/>
}
