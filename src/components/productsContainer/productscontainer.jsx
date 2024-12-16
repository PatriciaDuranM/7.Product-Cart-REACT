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
					removeItem={removeItem}
					isProductInCart={isProductInCart}
					key={product.id}
					product={product}
					addToCart={addToCart}
					cart={cart}
					setCart={setCart}
					{...product}
				/>
			))}
		</StyledProductContainer>
	);
};

export default ProductContainer;
