
import './App.css'
import Auth from './components/Auth'
import Layout from './components/Layout'
import Home from './pages/Home'
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route
} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route 
      path="/login" 
      element={<Auth />}
        />
    </Route>
  ))
 

  return (
   <RouterProvider router={router}/>
  )
}

export default App
