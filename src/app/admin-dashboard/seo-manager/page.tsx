import SEODashboard from '@/components/seo/seo-dashboard'
import MasterProtectedRoute from '@/utils/masterProtectedRoute'
import React from 'react'

export default function page() {
  return (
    <>
    <MasterProtectedRoute>
        <SEODashboard showlogout = {false}/>
    </MasterProtectedRoute>
      
    </>
  )
}
