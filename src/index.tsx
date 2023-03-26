import { createRoot } from 'react-dom/client'
import App from './pages/App'

const domNode = document?.getElementById('root')
if(domNode) {
  createRoot(domNode).render(<App />)
}