import React from 'react'
import VideoCreationPage from './clientvideo'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('video-creation');
  return(
    <>
<VideoCreationPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}
