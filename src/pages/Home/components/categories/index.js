import { ProductContainer } from './style'
import { categoryData } from './data'
import CategoryBox from 'components/categoryBox'

const Categories = () => {
	return (
		<>
			<ProductContainer>
				{categoryData.slice(0, 2).map((category) => (
					<CategoryBox
						type='horizontal'
						key={category.id}
						name={category.name}
						count={category.count}
						image={category.image}
						delivery={category.delivery}
						ending={category.ending}
					/>
				))}
			</ProductContainer>

			<ProductContainer>
				{categoryData.slice(2).map((category) => (
					<CategoryBox
						type='vertical'
						key={category.id}
						name={category.name}
						count={category.count}
						image={category.image}
						delivery={category.delivery}
						ending={category.ending}
					/>
				))}
			</ProductContainer>
		</>
	)
}

export default Categories
