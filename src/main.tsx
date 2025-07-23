import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle GitHub Pages SPA redirect
// Check if we have a redirect parameter from 404.html
const urlParams = new URLSearchParams(window.location.search);
const redirect = urlParams.get('redirect');

if (redirect) {
  // Remove the redirect parameter and navigate to the intended path
  const decodedPath = decodeURIComponent(redirect);
  window.history.replaceState(null, '', decodedPath);
}

createRoot(document.getElementById("root")!).render(<App />);
