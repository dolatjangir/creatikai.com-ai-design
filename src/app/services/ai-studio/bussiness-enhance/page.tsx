import React from 'react'
import BusinessEnhancePage from './clientEnhane'

import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <BusinessEnhancePage/>
}
