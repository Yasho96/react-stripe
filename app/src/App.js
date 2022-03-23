import { useState } from 'react';
import './styles/App.css';
import rose from './assets/rose.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>The Flower Store</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$5.00</h3>
					<img src={rose} alt='flower' />
					<button onClick={() => setShowItem(true)}>Purchase rose</button>
				</>
			)}
		</div>
	);
}

export default App;
