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

const Cart = ({ setCart, cart, removeItem }) => {
	const isCartEmpty = cart.length === 0;
	const totalPrice = cart => {
		return cart.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		);
	};
	return (
		<StyledCartContainer>
			<StyledCardTitle> Your Cart ({cart.length}) </StyledCardTitle>
			{isCartEmpty && (
				<StyledEmptyCart>
					<StyledImgCart
						src='public/assets/images/illustration-empty-cart.svg'
						alt='Empty cart'
					/>
					<StyledEmptyCartText>
						Your added items will appear here
					</StyledEmptyCartText>
				</StyledEmptyCart>
			)}
			{!isCartEmpty && (
				<StyledFullCart>
					<StyledCartItemsBox>
						{cart.map(item => (
							<StyledItem key={item.id}>
								<StyledItemInfo>
									<StyledTitleCart>{item.name}</StyledTitleCart>
									<StyledCuantityBox>
										<StyledCuantityCart>{item.quantity}x</StyledCuantityCart>
										<StyledPriceCart1>
											@${item.price.toFixed(2)}
										</StyledPriceCart1>
										<StyledPriceCart2>
											${item.price.toFixed(2)}
										</StyledPriceCart2>
									</StyledCuantityBox>
								</StyledItemInfo>
								<StyledRemoveCart
									onClick={() => removeItem(item.id, cart, setCart)}
									src='public/assets/images/icon-remove-item.svg'
									alt='Remove item'
								/>
							</StyledItem>
						))}
					</StyledCartItemsBox>
					<StyledTotal>
						<StyledOrderTotal>Order Total</StyledOrderTotal>
						<StyledTotalPrice>${totalPrice(cart).toFixed(2)}</StyledTotalPrice>
					</StyledTotal>
					<StyledCarbon>
						<img src='public/assets/images/icon-carbon-neutral.svg' alt='' />
						<StyledCarbonText>
							This is a{' '}
							<StyledCarbonTxtBold>carbon-neutral </StyledCarbonTxtBold>
							delivery
						</StyledCarbonText>
					</StyledCarbon>
					<StyledOrderButton>Confirm Order</StyledOrderButton>
				</StyledFullCart>
			)}
		</StyledCartContainer>
	);
};

export default Cart;
