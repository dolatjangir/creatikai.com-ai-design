
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import AICallingAgentLanding from './clientCalling'
export const generateMetadata = generateSEOMetadata;
export default async function  page() {
   const blogs = await getPageBlogs('calling-agent');
  return(
    <>
     <AICallingAgentLanding/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}


