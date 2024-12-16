import {
	StyledCarbon,
	StyledCarbonText,
	StyledCarbonTxtBold,
	StyledCardTitle,
	StyledCartContainer,
	StyledCartItemsBox,
	StyledCuantityBox,
	StyledCuantityCart,
	StyledEmptyCart,
	StyledEmptyCartText,
	StyledFullCart,
	StyledImgCart,
	StyledItem,
	StyledItemInfo,
	StyledOrderButton,
	StyledOrderTotal,
	StyledPriceCart1,
	StyledPriceCart2,
	StyledRemoveCart,
	StyledTitleCart,
	StyledTotal,
	StyledTotalPrice
} from './cart.styles';

const Cart = ({ product, cart }) => {
	const { name, price, quantity } = product;
	const { totalPrice, totaProducts } = cart;
	return (
		<StyledCartContainer>
			<StyledCardTitle> Your Cart ({totaProducts}) </StyledCardTitle>
			<StyledEmptyCart>
				<StyledImgCart
					src='public/assets/images/illustration-empty-cart.svg'
					alt='Empty cart'
				/>
				<StyledEmptyCartText>
					Your added items will appear here
				</StyledEmptyCartText>
			</StyledEmptyCart>
			<StyledFullCart>
				<StyledCartItemsBox>
					<StyledItem>
						<StyledItemInfo>
							<StyledTitleCart>{name}</StyledTitleCart>
							<StyledCuantityBox>
								<StyledCuantityCart>{quantity}x</StyledCuantityCart>
								<StyledPriceCart1>@${price.toFixed(2)}</StyledPriceCart1>
								<StyledPriceCart2>${price.toFixed(2)}</StyledPriceCart2>
							</StyledCuantityBox>
						</StyledItemInfo>
						<StyledRemoveCart
							src='public/assets/images/icon-remove-item.svg'
							alt='Remove item'
						/>
					</StyledItem>
				</StyledCartItemsBox>
				<StyledTotal>
					<StyledOrderTotal>Order Total</StyledOrderTotal>
					<StyledTotalPrice>{totalPrice}</StyledTotalPrice>
				</StyledTotal>
				<StyledCarbon>
					<img src='public/assets/images/icon-carbon-neutral.svg' alt='' />
					<StyledCarbonText>
						This is a <StyledCarbonTxtBold>carbon-neutral </StyledCarbonTxtBold>
						delivery
					</StyledCarbonText>
				</StyledCarbon>
				<StyledOrderButton>Confirm Order</StyledOrderButton>
			</StyledFullCart>
		</StyledCartContainer>
	);
};

export default Cart;
