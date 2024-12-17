import Product from '../Product/product';
import { StyledProductContainer } from './productsContainer.styles';

const ProductContainer = ({
	addToCart,
	products,
	setCart,
	cart,
	isProductInCart,
	removeItem
}) => {
	return (
		<StyledProductContainer>
			{products.map(product => (
				<Product
					key={product.id}
					cart={cart}
					setCart={setCart}
					isProductInCart={isProductInCart}
					product={product}
					addToCart={addToCart}
					removeItem={removeItem}
				/>
			))}
		</StyledProductContainer>
	);
};

export default ProductContainer;
