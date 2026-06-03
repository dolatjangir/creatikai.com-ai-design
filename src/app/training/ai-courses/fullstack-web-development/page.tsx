import React from 'react'
import FullStackTrainingPage from './clientweb'


import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;



export default async function  page() {
   const blogs = await getPageBlogs('fullstack-development-training');
  return(
    <>
<FullStackTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}