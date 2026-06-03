import React from 'react'
import ContactUsPage from './clientcontact'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;




export default async function  page() {
   const blogs = await getPageBlogs('contact-us');
  return(
    <>
<ContactUsPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
