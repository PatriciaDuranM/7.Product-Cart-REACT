import { useState } from 'react';
import Cart from './components/Cart/cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ProductContainer from './components/productsContainer/productscontainer';

import { GlobalStyles } from './styles/GlobalStyles';
import { PRODUCTS } from './Constants/products';

const App = () => {
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState('default');

	/*Para añadir productos al carrito*/
	const addToCart = product => {
		setCart([...cart, product]);
	};

	console.log('cart', cart);

	return (
		<>
			<GlobalStyles />
			<Header setFilter={setFilter} />
			<Main>
				<ProductContainer
					filter={filter}
					addToCart={addToCart}
					products={filterProducts(PRODUCTS, filter)}
				/>
				<Cart />
			</Main>
		</>
	);
};

export default App;

const filterProducts = (products, filter) => {
	const newPRODUCTS = [...products];
	if (filter === 'name') {
		return newPRODUCTS.sort((a, b) => a.name.localeCompare(b.name));
	}
	if (filter === 'price') {
		return newPRODUCTS.sort((a, b) => a.price - b.price);
	}
	return newPRODUCTS;
};
