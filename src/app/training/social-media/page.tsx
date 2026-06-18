import React from 'react'
import SocialMediaTrainingPage from './clientSocial'

 import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
 
 export const generateMetadata = generateSEOMetadata; 

export default async function  page() {
   const blogs = await getPageBlogs('google-ads-training');
  return(
    <>
<SocialMediaTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}