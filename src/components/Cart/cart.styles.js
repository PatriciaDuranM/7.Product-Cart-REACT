import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCartContainer = styled.div`
	width: 327px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	background-color: white;
	border-radius: 12px;

	@media screen and (width>768px) {
		width: 688px;
	}

	@media screen and (width>1024px) {
		width: 384px;
	}
`;
const StyledCardTitle = styled.h2`
	margin: 0px;
	color: ${COLORS.red};
	font-size: 24px;
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledEmptyCart = styled.div`
	width: 279px;
	height: 195px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-block: 16px;
	align-items: center;
	justify-content: space-between;

	@media screen and (width>768px) {
		width: 640px;
	}

	@media screen and (width>1024px) {
		width: 336px;
	}
`;

const StyledImgCart = styled.img`
	margin-inline: auto;
`;

const StyledEmptyCartText = styled.span`
	text-align: center;
	color: ${COLORS.mediumBrown};
	font-weight: ${FONT_WEIGHT.semibold};
	font-size: 14px;
`;

const StyledFullCart = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
const StyledCartItemsBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 63px;
	padding-bottom: 17px;
	border-bottom: 1px solid ${COLORS.whiteFont};
`;

const StyledItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledCuantityBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const StyledTitleCart = styled.h3`
	margin: 0px;
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.darkbrown};
`;

const StyledCuantityCart = styled.span`
	color: ${COLORS.red};
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.semibold};
`;
const StyledPriceCart1 = styled.span`
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.mediumBrown};
`;
const StyledPriceCart2 = styled(StyledPriceCart1)`
	color: ${COLORS.mediumBrown};
`;
const StyledRemoveCart = styled.img`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	border: 1px solid ${COLORS.lightBrownBorder};
	padding: 2px;
`;

const StyledTotal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 16px;
	color: ${COLORS.darkbrown};
`;
const StyledTotalPrice = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.darkbrown};
	font-size: 24px;
`;
const StyledOrderTotal = styled.span`
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.regular};
`;
const StyledCarbon = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 52px;
	background-color: ${COLORS.background};
	border-radius: 8px;
	padding-inline: 23px;
`;
const StyledCarbonText = styled.span`
	color: ${COLORS.darkbrown};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: 14px;
`;
const StyledCarbonTxtBold = styled(StyledCarbonText)`
	font-weight: ${FONT_WEIGHT.semibold};
`;
const StyledOrderButton = styled.button`
	width: 279px;
	height: 53px;
	border: none;
	background-color: ${COLORS.red};
	color: white;
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
	border-radius: 999px;
	padding-block: 16px;
`;

export {
	StyledCardTitle,
	StyledCartContainer,
	StyledEmptyCart,
	StyledImgCart,
	StyledEmptyCartText,
	StyledFullCart,
	StyledCartItemsBox,
	StyledItem,
	StyledItemInfo,
	StyledTitleCart,
	StyledCuantityBox,
	StyledPriceCart1,
	StyledPriceCart2,
	StyledRemoveCart,
	StyledTotalPrice,
	StyledOrderTotal,
	StyledCarbonText,
	StyledCarbonTxtBold,
	StyledOrderButton,
	StyledCarbon,
	StyledTotal,
	StyledCuantityCart
};
