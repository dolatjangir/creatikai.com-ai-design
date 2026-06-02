import React from 'react'
import ContactUsPage from './clientcontact'
import { generateSEOMetadata } from '../../../../lib/seometadata';
export const generateMetadata = generateSEOMetadata;
export default function page() {
  return <ContactUsPage/>
}
