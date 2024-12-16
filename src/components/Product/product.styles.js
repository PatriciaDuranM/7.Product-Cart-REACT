import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const StyledProductBox = styled.div`
	width: 327px;
	height: 234px;
	position: relative;

	@media screen and(width>768px) {
		width: 213px;
	}

	@media screen and(width>1024px) {
		width: 250px;
		height: 262px;
	}
`;

const StyledProductImg = styled.img`
	width: 327px;
	height: 212px;
	border-radius: 8px;
	@media screen and (width>768px) {
		width: 213px;
		height: 212px;
	}

	@media screen and (width>1024px) {
		width: 250px;
		height: 240px;
	}
`;

const StyledButton = styled.button`
	position: absolute;
	top: 190px;
	left: 83px;
	width: 160px;
	height: 44px;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 999px;
	font-weight: ${FONT_WEIGHT.semibold};
	font-size: 14px;

	@media screen and (width>768px) {
		top: 190px;
		left: 26px;
	}

	@media screen and (width>1024px) {
		top: 190px;
		left: 45px;
	}
`;

const StyledAddButton = styled(StyledButton)`
	background-color: white;
	color: ${COLORS.darkbrown};
	border: 1px solid ${COLORS.lightBrownBorder};
	border-radius: 999px;
	gap: 8px;
	padding-left: 24px;
	padding-top: 12px;
`;

const StyledQuantityButton = styled(StyledButton)`
	background-color: ${COLORS.red};
	border: none;
	color: white;
	justify-content: space-between;
	align-items: center;
	padding-inline: 12px;
`;

const StyledCircleButton = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid white;
	padding: 4px;
`;

const StyledCircleButtonMinus = styled(StyledCircleButton)`
	padding-top: 8px;
`;

const StyledIconCart = styled.img`
	width: 20px;
	height: 20px;
`;
const StyledProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	text-align: start;
`;

const StyledTag = styled.h6`
	margin-block: 0px;
	font-size: 14px;
	color: ${COLORS.mediumBrown};
	font-weight: ${FONT_WEIGHT.regular};
`;
const StyledTitle = styled.h2`
	margin-block: 0px;
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.darkbrown};
`;
const StyledPrice = styled.h2`
	margin-block: 0px;
	font-size: 16px;
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${COLORS.red};
`;

export {
	StyledContainer,
	StyledProductBox,
	StyledProductImg,
	StyledAddButton,
	StyledQuantityButton,
	StyledCircleButton,
	StyledIconCart,
	StyledProductInfo,
	StyledTag,
	StyledTitle,
	StyledPrice,
	StyledCircleButtonMinus
};
