import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { api } from './utils/api';
import emptyList from './assets/emptyList.png';
import { render } from 'react-dom';

export default function App() {
	const [vagasApi, setVagasApi] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api
			.get('/destaques')
			.then(({ data }) => {
				setTimeout(() => {
					setVagasApi(data);
					setIsLoading(false);
				}, 3000);
			})
			.catch(err => {
				render(
					<img width={250} src={emptyList} alt='' />,
					document.getElementById('vagasDestaque')
				);
				console.log(err);
			});
	}, []);

	return (
		<>
			<Header />
			<Main />
			<Footer isLoading={isLoading} vagasApi={vagasApi} />
		</>
	);
}
