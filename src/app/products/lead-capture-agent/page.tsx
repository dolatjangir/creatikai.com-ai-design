import React from 'react'
import LeadCapturePage from './clientLead'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('lead-capture-agent');
  return (
    <>
    <LeadCapturePage/>
 <RelatedBlogs blogs={blogs} />
</>
    )
}
