import React from 'react'
import ContentCreationPage from './clientContent'

import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('content-creation');
  return(
    <>
<ContentCreationPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
