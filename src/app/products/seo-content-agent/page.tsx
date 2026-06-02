import AISEOContentAgentLanding from "./clientSeo";
import { generateSEOMetadata } from '../../../../lib/seometadata';
import RelatedBlogs from "@/components/related-blogs";
import { getPageBlogs } from "../../../../lib/blogs";

export const generateMetadata = generateSEOMetadata;

export default  async function page() {
   const blogs = await getPageBlogs('seo-content-agent');
  return (
    <>
    
   <AISEOContentAgentLanding/>
 <RelatedBlogs blogs={blogs} />
</>
    )
}
