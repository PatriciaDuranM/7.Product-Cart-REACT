import {
	StyledAddButton,
	StyledCircleButton,
	StyledCircleButtonMinus,
	StyledContainer,
	StyledIconCart,
	StyledPrice,
	StyledProductBox,
	StyledProductImg,
	StyledProductInfo,
	StyledQuantityButton,
	StyledTag,
	StyledTitle
} from './product.styles';

const Product = ({
	product,
	addToCart,
	cart,
	setCart,
	removeItem,
	isProductInCart
}) => {
	const { id, imgDesk, imgTab, imgMob, alt, tag, name, price } = product;

	const productInCart = isProductInCart(id, cart);

	const incrementQuantity = () => {
		productInCart.quantity++;
		setCart([...cart]);
	};
	const decrementQuantity = () => {
		productInCart.quantity--;
		if (productInCart.quantity === 0) {
			removeItem(productInCart.id, cart, setCart);
		} else {
			setCart([...cart]);
		}
	};

	return (
		<StyledContainer>
			<StyledProductBox>
				<picture>
					<source media='(min-width:1024px)' srcSet={imgDesk} />
					<source media='(min-width:786px)' srcSet={imgTab} />
					<source media='(min-width:320px)' srcSet={imgMob} />
					<StyledProductImg
						src={imgMob}
						alt={alt}
						$productInCart={productInCart}
					></StyledProductImg>
				</picture>
				{productInCart && (
					<StyledQuantityButton>
						<StyledCircleButtonMinus onClick={() => decrementQuantity()}>
							<img
								src='public/assets/images/icon-decrement-quantity.svg'
								alt='Remove one'
							/>
						</StyledCircleButtonMinus>
						{productInCart.quantity}
						<StyledCircleButton onClick={() => incrementQuantity()}>
							<img
								src='/assets/images/icon-increment-quantity.svg'
								alt='Add one more'
							/>
						</StyledCircleButton>
					</StyledQuantityButton>
				)}
				{!productInCart && (
					<StyledAddButton onClick={() => addToCart(product)}>
						<StyledIconCart src='/assets/images/icon-add-to-cart.svg' /> Add to
						Cart
					</StyledAddButton>
				)}
			</StyledProductBox>
			<StyledProductInfo>
				<StyledTag>{tag}</StyledTag>
				<StyledTitle>{name}</StyledTitle>
				<StyledPrice>${price.toFixed(2)}</StyledPrice>
			</StyledProductInfo>
		</StyledContainer>
	);
};

export default Product;
