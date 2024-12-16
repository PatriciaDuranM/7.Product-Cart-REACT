import styled from 'styled-components';
import { COLORS } from '../../styles/ColorStyles';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	gap: 29px;

	@media screen and (width>768px) {
		gap: 32px;
	}
`;

const SytledTitle = styled.h1`
	color: ${COLORS.darkbrown};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: 40px;
`;

const StyledFilterBox = styled.div`
	width: 268px;
	display: flex;
	gap: 18px;
	justify-content: space-between;

	@media screen and (width>768px) {
		.filter-tab {
			width: 276px;
			gap: 19px;
		}
	}

	@media screen and (width>1024px) {
		.filter-tab {
			width: 347px;
			gap: 24px;
		}
	}
`;
const SytledChipFilter = styled.div`
	width: 77px;
	height: 34px;
	background-color: ${({ $state, $active }) =>
		$state === $active ? COLORS.red : 'white'};
	color: ${({ $state, $active }) =>
		$state === $active ? COLORS.whiteFont : COLORS.darkbrown};
	border: 1px solid ${COLORS.lightBrownBorder};
	border-radius: 999px;
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.semibold};
	text-align: center;
	padding: 7px;

	@media screen and (width>768px) {
		.chip {
			width: 79px;
		}
	}

	@media screen and (width>1024px) {
		.chip {
			width: 100px;
		}
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.superlightBrown};
		}
	}
`;

export { StyledHeader, SytledTitle, StyledFilterBox, SytledChipFilter };
