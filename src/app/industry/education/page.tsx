import React from 'react'
import EducationTrainingPage from './clientEducation'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';



export const generateMetadata = generateSEOMetadata;
export default async function  page() {
   const blogs = await getPageBlogs('education');
  return(
    <>
     <EducationTrainingPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}