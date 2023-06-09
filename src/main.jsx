import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Client/Routes/Routes.jsx';
import AuthProviders from './Client/Providers/Providers.jsx';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
    <div className=' max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
