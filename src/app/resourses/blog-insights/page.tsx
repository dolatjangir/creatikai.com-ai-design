import React from 'react'
import BlogInsightsPage from './clientBlog'
import { generateSEOMetadata } from '../../../../lib/seometadata';
export const generateMetadata = generateSEOMetadata;

export default function page() {
  return <BlogInsightsPage/>
}
