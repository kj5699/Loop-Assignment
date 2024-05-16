// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URLS } from '../../data/data'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: API_URLS.baseUrl }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getAlerts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/alerts',
    }),
    getOverview: builder.query({
        // The URL for the request is '/fakeApi/posts'
        query: () => '/overview',
        
    })
  })
})

export const { useGetAlertsQuery, useGetOverviewQuery } = apiSlice