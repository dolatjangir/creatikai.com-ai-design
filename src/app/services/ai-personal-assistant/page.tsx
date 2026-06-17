import React from 'react'
import AIPersonalAssistantPage from './clientPersonal'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('ai-personal-assistent');
  return(
    <>
<AIPersonalAssistantPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}
