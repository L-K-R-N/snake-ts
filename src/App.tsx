import { createBrowserRouter }  from "react-router-dom"
import {RouterProvider} from 'react-router'
import { Menu } from "./pages/menu/Menu"
import { Settings } from "./pages/settings/Settings"
import { Game } from "./pages/game/Game"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu/>,
		errorElement: <Menu/>
	},
	{
		path: '/settings',
		element: <Settings/>,
	},
	{
		path: '/game',
		element: <Game/>,
	},
])


const App: React.FC = () => {
	
	return <RouterProvider router={router}/>
}

export default App
