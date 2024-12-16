import { useState } from 'react';
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

const Product = ({ product, addToCart }) => {
	const { imgDesk, imgTab, imgMob, alt, tag, name, price } = product;

	const [quantity, setQuantity] = useState(0);

	const showQuantityButton = () => {
		addToCart(product);
		setQuantity(1);
	};

	const increaseQuantity = () => setQuantity(quantity + 1);
	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		} else {
			setQuantity(0);
		}
	};

	return (
		<StyledContainer>
			<StyledProductBox>
				<picture>
					<source media='(min-width:1024px)' srcSet={imgDesk} />
					<source media='(min-width:786px)' srcSet={imgTab} />
					<source media='(min-width:320px)' srcSet={imgMob} />
					<StyledProductImg src={imgMob} alt={alt}></StyledProductImg>
				</picture>
				<StyledQuantityButton>
					<StyledCircleButtonMinus>
						<img
							src='public/assets/images/icon-decrement-quantity.svg'
							alt='Remove one'
						/>
					</StyledCircleButtonMinus>
					1
					<StyledCircleButton>
						<img
							src='/assets/images/icon-increment-quantity.svg'
							alt='Add one more'
						/>
					</StyledCircleButton>
				</StyledQuantityButton>
				<StyledAddButton onClick={() => addToCart(product)}>
					<StyledIconCart src='/assets/images/icon-add-to-cart.svg' /> Add to
					Cart
				</StyledAddButton>
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
