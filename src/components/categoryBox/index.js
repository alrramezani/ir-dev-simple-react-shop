import {
	CategoryBoxContainer,
	InfoContainer,
	NameContainer,
	EndingAlert,
} from './style'
import ForwardBtn from 'components/forwardBtn'

const CategoryBox = ({ type, name, count, image, delivery, ending }) => {
	const showCount = () => {
		if (name === 'others') {
			return <ForwardBtn />
		} else {
			return <h3>{count}</h3>
		}
	}

	const showDelivery = () => {
		if (delivery) {
			return (
				<>
					<span className='delivery'>Delivery:</span>
					<span>{delivery}</span>
				</>
			)
		}
	}

	const showEnding = () => {
		if (ending) {
			return <EndingAlert>Ending</EndingAlert>
		}
	}

	return (
		<CategoryBoxContainer image={image} type={type}>
			<InfoContainer>
				<NameContainer>
					<h3>{name}</h3>
					{showDelivery()}
					{showEnding()}
				</NameContainer>
				{showCount()}
			</InfoContainer>
		</CategoryBoxContainer>
	)
}

export default CategoryBox
