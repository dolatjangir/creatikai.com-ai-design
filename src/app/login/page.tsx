import React from 'react'
import LoginPage from './clientLogin'
import { generateSEOMetadata } from '../../../lib/seometadata';



export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <LoginPage/>
}
