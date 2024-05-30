import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'


import router from './Route/Route';
import AuthProvider from './AuthProvider/AuthProvider';
import global_en from './Translation/en/global.json'
import global_fr from './Translation/fr/global.json'
import i18next from "i18next";


import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next';

const queryClient = new QueryClient()

i18next.init({
   interpolation: { escapeValue: false },
   lng: "en" ,
   resources: {
    en: {
      global: global_en
    },
    fr: {
      global:global_fr
    }
   }

})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <I18nextProvider i18n={i18next}>
  <QueryClientProvider client={queryClient}>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </I18nextProvider>
    
 </React.StrictMode>,
)
