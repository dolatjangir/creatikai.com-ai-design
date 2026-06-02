import React from 'react'
import WhyChooseUsPage from './clientchooseUs'
import { generateSEOMetadata } from '../../../../lib/seometadata';
export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <WhyChooseUsPage/>
}
