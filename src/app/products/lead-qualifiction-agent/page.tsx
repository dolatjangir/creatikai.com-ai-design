import React from 'react'
import LeadBotPage from './clientLeadQualifiction'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('lead-qualification-agent');
  return(
    <>
    <LeadBotPage/>
 <RelatedBlogs blogs={blogs} />
</>
    )
}
