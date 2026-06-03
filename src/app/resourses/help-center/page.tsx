import React from 'react'
import HelpCenterPage from './clientHelp'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  page() {
   const blogs = await getPageBlogs('help-center');
  return(
    <>
<HelpCenterPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
