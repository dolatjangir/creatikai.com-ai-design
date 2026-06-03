import React from 'react'
import RealEstateTrainingPage from './clientEstate'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';



export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('real-estate');
  return(
    <>
     <RealEstateTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}
