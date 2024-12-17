import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vw;
	background-color: rgb(0 0 0 /0.5);
`;

const StyledModal = styled.div`
	width: 375px;
	display: flex;
	flex-direction: column;
	padding-inline: 24px;
	padding-top: 40px;
	padding-bottom: 24px;
	background-color: white;
	border-radius: 12px;
	gap: 24px;
`;
const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	background-color: ${COLORS.background};
	padding: 24px;
	gap: 48px;
`;
const StyledProductsBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledItem = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-items: center;
	padding-bottom: 24px;
	border-bottom: 1px solid ${COLORS.background};
`;
const StyledImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 4px;
`;

const StyledProductInfo = styled.div`
	width: 164px;
	height: 46px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
const StyledProductName = styled.h2`
	margin: 0px;
	font-size: 14px;
	color: ${COLORS.darkbrown};
	font-weight: ${FONT_WEIGHT.semibold};
`;
const StyledNumbers = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;
const StyledQuantity = styled.span`
	color: ${COLORS.red};
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.semibold};
`;
const StyledPrice = styled.span`
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.mediumBrown};
`;

const StyledTotaProductPrice = styled.span`
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.darkbrown};
`;

const StyledTotal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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

const StyledButton = styled.button`
	width: 327px;
	height: 53px;
	border: none;
	background-color: ${COLORS.red};
	color: white;
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
	border-radius: 999px;
	padding-block: 16px;
	padding-inline: 24px;
	text-align: center;
`;

export {
	StyledBackground,
	StyledModal,
	StyledBox,
	StyledProductsBox,
	StyledTotal,
	StyledTotalPrice,
	StyledOrderTotal,
	StyledItem,
	StyledImg,
	StyledProductInfo,
	StyledProductName,
	StyledNumbers,
	StyledQuantity,
	StyledPrice,
	StyledTotaProductPrice,
	StyledButton
};
