import React from 'react'
import AITrainingPage from './clientai'

import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';





export const generateMetadata = generateSEOMetadata;





export default async function  page() {
   const blogs = await getPageBlogs('ai-training');
  return(
    <>
<AITrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}
