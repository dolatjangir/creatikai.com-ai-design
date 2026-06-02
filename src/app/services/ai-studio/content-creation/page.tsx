import React from 'react'
import ContentCreationPage from './clientContent'

import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <ContentCreationPage/>
}
