import React from 'react'
import DigitalMarketingJaipurPage from './clienttraining'

import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('digital-marketing-training');
  return(
    <>
<DigitalMarketingJaipurPage/>
     <RelatedBlogs blogs={blogs} />
     </>
  )
}