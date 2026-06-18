import React from 'react'
import AIChatbotPage from './clientChatbot'

import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('ai-chatbot');
  return(
    <>
<AIChatbotPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}

