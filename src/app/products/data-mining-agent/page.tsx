import React from 'react'
import DataMiningAgentLanding from './clientData'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('data-mining-agent');
  return (
  <>
  <DataMiningAgentLanding/>
 <RelatedBlogs blogs={blogs} />
  </>
  )
}


