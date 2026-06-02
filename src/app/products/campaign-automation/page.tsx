
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../../lib/blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import CampaignAutomationAgentLanding from './clientCampaign'
export const generateMetadata = generateSEOMetadata;
export default  async function page() {
   const blogs = await getPageBlogs('campaign-automation');
  return (
  <>
  <CampaignAutomationAgentLanding/>
   <RelatedBlogs blogs={blogs} />
  </>

  )
}


