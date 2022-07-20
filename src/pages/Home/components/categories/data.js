import sofaImage from './../../../../assets/productImages/sofa.png'
import chairImage from './../../../../assets/productImages/bench.png'
import coffeeTableImage from './../../../../assets/productImages/coffee-table.png'
import dressingTableImage from './../../../../assets/productImages/dressing-table.png'
import wickerChairImage from './../../../../assets/productImages/wicker-chair.png'
import tableImage from './../../../../assets/productImages/table.png'

export const categoryData = [
	{
		id: 1,
		name: 'bed',
		count: '24',
		image: sofaImage,
		delivery: '2-3 days',
	},

	{
		id: 2,
		name: 'bench',
		count: '14',
		image: chairImage,
		ending: true,
	},

	{
		id: 3,
		name: 'coffee table',
		count: '32',
		image: coffeeTableImage,
	},

	{
		id: 4,
		name: 'dressing table',
		count: '20',
		image: dressingTableImage,
	},

	{
		id: 5,
		name: 'wicker chair',
		count: '17',
		image: wickerChairImage,
	},

	{
		id: 6,
		name: 'others',
		count: '',
		image: tableImage,
	},
]
