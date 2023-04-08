import { lazy } from 'react'
import { Outlet, Link } from 'react-router-dom'
import TestComponent from '@/components/testComponent'
import InfoPage from './InfoPage'
const APageInfo =  lazy(() => import('libA/Search'))

type AppType = {
  title?: React.ReactNode,
  showError?: boolean,
}
const App = (props: AppType) => {
  const { title, showError } = props
  if(showError) {
    throw new Error('test')
  }
  return (<div>
    { title && <h1>{title}</h1>}
    Hello React Page in test2
    <TestComponent />
    <div>
      <Link to="about">to Aubout</Link>
    </div>
    <div>
      <Outlet />
    </div>
    <div>
      <InfoPage />
    </div>
    <APageInfo />
  </div>)
}

export default App