import Product from '../Product/product';
import { StyledProductContainer } from './productsContainer.styles';

const ProductContainer = ({ addToCart, products }) => {
	return (
		<StyledProductContainer>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addToCart={addToCart}
					{...product}
				/>
			))}
		</StyledProductContainer>
	);
};

export default ProductContainer;
