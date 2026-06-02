import React from 'react'
import RegisterPage from './clientRegister'
import { generateSEOMetadata } from '../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;
export default function page() {
  return <RegisterPage/>
}
