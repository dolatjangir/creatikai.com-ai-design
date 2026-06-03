import React from 'react'
import AIToolsCoursePage from './clientTools'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('ai-tools-course');
  return(
    <>
 <AIToolsCoursePage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}
