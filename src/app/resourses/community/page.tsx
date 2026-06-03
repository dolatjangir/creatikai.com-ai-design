import React from 'react'
import CommunityPage from './clientCommunity'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('blog-insights');
  return(
    <>
 <CommunityPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}