import React from 'react'
import AIChatbotPage from './clientChatbot'

import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <AIChatbotPage/>
}
