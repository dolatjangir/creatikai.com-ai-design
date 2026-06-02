import React from 'react'
import SocialMediaTrainingPage from './clientSocial'

 import { generateSEOMetadata } from '../../../../../lib/seometadata';
 
 export const generateMetadata = generateSEOMetadata; 
 
export default function page() {
  return <SocialMediaTrainingPage/>
}
