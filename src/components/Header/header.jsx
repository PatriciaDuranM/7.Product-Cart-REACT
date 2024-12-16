import { useState } from 'react';
import {
	StyledFilterBox,
	StyledHeader,
	SytledChipFilter,
	SytledTitle
} from './header.styles';

const Header = ({ setFilter }) => {
	const [filterActive, setFilterActive] = useState('default');

	/*filtro y actualización de estado*/
	const filterChange = (filter) => {
		setFilterActive(filter);
		setFilter(filter);
	};

	return (
		<StyledHeader>
			<SytledTitle>Desserts</SytledTitle>
			<StyledFilterBox>
				<SytledChipFilter
					$active={filterActive === 'default'}
					$state={'default'}
					onClick={() => filterChange('default')}
				>
					Default
				</SytledChipFilter>
				<SytledChipFilter
					$active={filterActive === 'name'}
					$state={'name'}
					onClick={() => filterChange('name')}
				>
					Name
				</SytledChipFilter>
				<SytledChipFilter
					$active={filterActive === 'price'}
					$state={'price'}
					onClick={() => filterChange('price')}
				>
					Price
				</SytledChipFilter>
			</StyledFilterBox>
		</StyledHeader>
	);
};

export default Header;
