import {
	Button,
	Container,
	ContainerInfo,
	ContainerNew,
	ContainerVaga,
	ContainerVagancy,
	Image,
	Modal,
	Title,
} from './styles';

import ReactLoading from 'react-loading';

import LogoEnterprice from '../../assets/LogoEnterprice.jpg';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { VagaProps } from '../../types/vaga';

export function Footer() {
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
				console.log(err);
			});
	}, []);

	return (
		<Container>
			<Title>Veja nossas vagas em destaque</Title>
			<ContainerVaga>
				{isLoading ? (
					<ReactLoading type='bubbles' color='#f0e68c' />
				) : (
					vagasApi.map((vaga: VagaProps) => (
						<ContainerVagancy>
							<Modal>
								<ContainerInfo>
									<div>
										<Image src={LogoEnterprice} alt='Imagem' />
									</div>
									<div>
										<span>{vaga.empresa}</span>
										<h3>{vaga.titulo}</h3>
										<span>R${vaga.remuneracao}</span>
									</div>
								</ContainerInfo>
								<ContainerNew>
									<span>Nova</span>
								</ContainerNew>
								<div>
									<Button>Ver vaga</Button>
								</div>
							</Modal>
						</ContainerVagancy>
					))
				)}
			</ContainerVaga>
		</Container>
	);
}
