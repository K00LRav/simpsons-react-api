import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import analyticsConfig from '../vercel-analytics.config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics {...analyticsConfig} />
  </>,
)
