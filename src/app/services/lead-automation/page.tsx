import React from 'react'
import LeadAutomationPage from './clientLead'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('lead-automation');
  return(
    <>
<LeadAutomationPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}