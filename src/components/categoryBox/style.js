import styled from 'styled-components'

export const CategoryBoxContainer = styled.div`
	border: solid 1px #ebebeb;
	border-radius: 10px;
	width: ${(props) => {
		switch (props.type) {
			case 'horizontal':
				return '48%'

			case 'vertical':
				return '23%'

			default:
				return '48%'
		}
	}};
	min-height: ${(props) => {
		switch (props.type) {
			case 'horizontal':
				return '300px'

			case 'vertical':
				return '400px'

			default:
				return '300px'
		}
	}};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 125px 80px;
	background-image: ${(props) => `url(${props.image})`};
`
export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px 30px;
	text-transform: capitalize;
`
export const NameContainer = styled.div`
	.delivery {
		color: #898989;
		display: inline-block;
		margin: 10px 5px 0 0;
	}
`

export const EndingAlert = styled.span`
	padding: 10px 30px;
	color: #ffffff;
	background-color: #f22613;
	border-radius: 20px;
	display: inline-block;
	margin-top: 15px;
`
