import SocialMediaAgent from "@/components/agents/sociamedia";
import MasterProtectedRoute from "@/utils/masterProtectedRoute";



export default function page() {
  return (
    <MasterProtectedRoute>
   <SocialMediaAgent/>
   </MasterProtectedRoute>
  )
}
