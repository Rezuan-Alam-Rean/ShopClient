
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <h1>nav</h1>
      <Outlet/>
      <h1>footer</h1>
    </div>
  )
}

export default MainLayout
