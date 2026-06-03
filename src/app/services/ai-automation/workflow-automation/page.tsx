import React from 'react'
import WorkflowAutomationPage from './clientWorkflow'
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('workflow-automation');
  return(
    <>
<WorkflowAutomationPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}