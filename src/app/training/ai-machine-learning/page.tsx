import React from 'react'
import AIMachineLearningPage from './clientmachine'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('ai-machine-learning');
  return(
    <>
<AIMachineLearningPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}