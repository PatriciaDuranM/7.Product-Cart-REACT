import {
	StyledFilterBox,
	StyledHeader,
	SytledChipFilter,
	SytledTitle
} from './header.styles';

const Header = ({ setFilter, filter }) => {
	/*filtro y actualización de estado*/

	return (
		<StyledHeader>
			<SytledTitle>Desserts</SytledTitle>
			<StyledFilterBox>
				<SytledChipFilter
					$active={filter}
					$state={'default'}
					onClick={() => setFilter('default')}
				>
					Default
				</SytledChipFilter>
				<SytledChipFilter
					$active={filter}
					$state={'name'}
					onClick={() => setFilter('name')}
				>
					Name
				</SytledChipFilter>
				<SytledChipFilter
					$active={filter}
					$state={'price'}
					onClick={() => setFilter('price')}
				>
					Price
				</SytledChipFilter>
			</StyledFilterBox>
		</StyledHeader>
	);
};

export default Header;
