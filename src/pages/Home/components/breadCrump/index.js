import { BsArrowRight } from 'react-icons/bs'
import { AiFillFire } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BreadCrumpContainer } from './style'
import BackBtn from 'components/backBtn'

const BreadCrump = () => {
	return (
		<BreadCrumpContainer>
			<BackBtn />
			<span id='previous-page'>Home Page </span>
			<IconContext.Provider value={{ color: 'gray', size: '12px' }}>
				<BsArrowRight />
			</IconContext.Provider>
			<span id='current-page'>
				HOT
				<AiFillFire />
			</span>
		</BreadCrumpContainer>
	)
}

export default BreadCrump
