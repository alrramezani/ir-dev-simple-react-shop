import BreadCrump from '../breadCrump'
import FilterBtn from 'components/filterBtn'
import { HomePageNavContainer } from './style'

const HomePageNav = () => {
	return (
		<HomePageNavContainer>
			<BreadCrump />
			<FilterBtn />
		</HomePageNavContainer>
	)
}

export default HomePageNav
