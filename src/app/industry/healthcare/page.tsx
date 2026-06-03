import React from 'react'
import HealthcareTrainingPage from './clienthealthcare'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';



export const generateMetadata = generateSEOMetadata;

export default async function  page() {
   const blogs = await getPageBlogs('healthcare');
  return(
    <>
     <HealthcareTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
