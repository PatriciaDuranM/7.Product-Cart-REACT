import styled from 'styled-components';

const StyledProductContainer = styled.div`
	display: grid;
	grid-template-columns: 327px;
	gap: 24px;

	@media screen and (width>768px) {
		grid-template-columns: repeat(3, 213px);
	}

	@media screen and (width>1024px) {
		grid-template-columns: repeat(3, 250px);
	}
`;

export { StyledProductContainer };
