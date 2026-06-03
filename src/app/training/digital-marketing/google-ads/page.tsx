import React from 'react'
import GoogleAdsTrainingPage from './clientads'

import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('google-ads-training');
  return(
    <>
 <GoogleAdsTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}