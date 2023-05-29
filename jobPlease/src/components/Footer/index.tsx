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

import emptyList from '../../assets/emptyList.png';
import LogoEnterprice from '../../assets/LogoEnterprice.jpg';

import { VagaProps } from '../../types/vaga';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
	isLoading: boolean;
	vagasApi: VagaProps[];
}

export function Footer({ isLoading, vagasApi }: FooterProps) {
	const navigate = useNavigate();

	return (
		<Container>
			<Title>Veja nossas vagas em destaque</Title>
			<ContainerVaga id='vagasDestaque'>
				{isLoading ? (
					<ReactLoading type='bubbles' color='#f0e68c' height={50} width={50} />
				) : vagasApi.length === 0 ? (
					<img width={200} src={emptyList} />
				) : (
					vagasApi.map((vaga: VagaProps) => (
						<ContainerVagancy key={vaga.id}>
							<Modal>
								<ContainerInfo>
									<div>
										<Image src={LogoEnterprice} alt='Imagem' />
									</div>
									<div>
										<span>{vaga.empresa}</span>
										<h3>{vaga.titulo}</h3>
										<span>R$ {vaga.remuneracao}</span>
									</div>
								</ContainerInfo>
								<ContainerNew>
									<span>Nova</span>
								</ContainerNew>
								<div>
									<Button onClick={() => navigate('#')}>
										<s style={{ backgroundColor: '#b22222', color: '#FFF' }}>Ver vaga</s>
									</Button>
								</div>
							</Modal>
						</ContainerVagancy>
					))
				)}
			</ContainerVaga>
		</Container>
	);
}
