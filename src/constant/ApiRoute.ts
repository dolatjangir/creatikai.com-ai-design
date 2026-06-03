const BASE_URL = "https://appapi.estateai.in/api"

export const API_ROUTES = {

ADMIN: {
    // 🔓 Public Routes
    SIGNUP: `${BASE_URL}/admin/signup`,
    LOGIN: `${BASE_URL}/admin/login`,
    LOGOUT: `${BASE_URL}/admin/logout`,

    // 🔐 Protected Routes
    CHECK: `${BASE_URL}/admin/check`,

    // 👤 Admin Management
    CREATE: `${BASE_URL}/admin/create`,
    GET_ALL: `${BASE_URL}/admin/all`,
    GET_BY_ID: (id: String) => `${BASE_URL}/admin/${id}`,
    UPDATE_DETAILS: (id: String) => `${BASE_URL}/admin/${id}/details`,
    UPDATE_PASSWORD: (id: String) => `${BASE_URL}/admin/${id}/password`,
    DELETE: (id: String) => `${BASE_URL}/admin/${id}`,
  },


  
  // social media manager routes

  SOCIALMEDIA: {
    INSTAGRAM: {
      GET_LIVE_POST: `${BASE_URL}/social-auth/get-instagram-posts`,
      GET_ANALYTICS: `${BASE_URL}/social-auth/get-instagram-analytics`,
      DISCONNECT_ACCOUNT: `${BASE_URL}/social-auth/disconnect-instagram`,
      SCHEDULE_POST: `${BASE_URL}/social-auth/schedule-instagram-post`,
      GET_SCHEDULED_POST: (params: string) => `${BASE_URL}/social-auth/scheduled-posts-data?platform=${params}`,

    },
    FACEBOOK: {
      GET_LIVE_POST: `${BASE_URL}/social-auth/get-facebook-posts`,
      GET_ANALYTICS: `${BASE_URL}/social-auth/get-facebook-analytics`,
      DISCONNECT_ACCOUNT: `${BASE_URL}/social-auth/disconnect-facebook`,
      SCHEDULE_POST: `${BASE_URL}/social-auth/schedule-facebook-post`,
      GET_SCHEDULED_POST: (params: string) => `${BASE_URL}/social-auth/scheduled-posts-data?platform=${params}`,
    },
    AUTOSOCIALAGENT: {
      RUN: `${BASE_URL}/social-auth/auto-social-agent`
    }
  },
  }


  