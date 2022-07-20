import { useContext } from 'react'
import mainContext from 'contexts/main'
import HomePageNav from './components/homePageNav'
import Categories from './components/categories'

const Home = () => {
	const { setUser } = useContext(mainContext)
	return (
		<>
			<div
				onClick={() => {
					setUser({ firstName: 'alireza' })
				}}>
				Click here
			</div>

			<HomePageNav />
			<Categories />
		</>
	)
}
export default Home
