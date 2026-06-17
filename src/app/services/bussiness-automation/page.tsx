import React from 'react'
import BusinessAutomationPage from './clientAutomation'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('business-automation');
  return(
    <>
<BusinessAutomationPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
