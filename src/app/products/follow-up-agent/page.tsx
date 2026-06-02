import React from 'react'
import FollowUpAgentLanding from './clientFollowUp'
import { generateSEOMetadata } from '../../../../lib/seometadata'
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('follow-up-agent');
  return(
    <>
<FollowUpAgentLanding/>
 <RelatedBlogs blogs={blogs} />
</>
  ) 
  
}

