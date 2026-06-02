import React from 'react'
import ContentCreationAgentLanding from './clientContent'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('content-creation-agent');
  return (
    <>
   <ContentCreationAgentLanding/>
   <RelatedBlogs blogs={blogs} />
   </>

   )
}


