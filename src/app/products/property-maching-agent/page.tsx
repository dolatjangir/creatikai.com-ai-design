
import PropertyMatcherPage from './clientproperty'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';

export const generateMetadata = generateSEOMetadata;

export default  async function page() {
   const blogs = await getPageBlogs('property-maching-agent');
  return (
    <>
    
    <PropertyMatcherPage/>
 <RelatedBlogs blogs={blogs} />
</>
    )
}
