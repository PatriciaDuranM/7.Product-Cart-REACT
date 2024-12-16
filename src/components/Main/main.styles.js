import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-top: 26px;

	@media screen and (width>768px) {
		gap: 79px;
		margin-top: 32px;
	}
	@media screen and (width>1024px) {
		flex-direction: row;
		gap: 32px;
		margin-top: 42px;
	}
`;

export { StyledMain };
