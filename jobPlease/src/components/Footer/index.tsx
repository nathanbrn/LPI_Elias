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

import { vagas } from '../../utils/vagas';

import LogoEnterprice from '../../assets/LogoEnterprice.jpg';

export function Footer() {
	const filterVagas = vagas.filter(vaga => vaga.destaque === true);

	return (
		<Container>
			<Title>Veja nossas vagas em destaque</Title>
			<ContainerVaga>
				{filterVagas.map(vaga => (
					<ContainerVagancy>
						<Modal>
							<ContainerInfo>
								<div>
									<Image src={LogoEnterprice} alt='Imagem' />
								</div>
								<div>
									<span>{vaga.empresa}</span>
									<h3>{vaga.titulo}</h3>
									<span>R${vaga.remuneracao},00</span>
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
				))}
			</ContainerVaga>
			{/* <ContainerVagancy>
				<Modal>
					<ContainerInfo>
						<div>
							<Image src={LogoEnterprice} alt='Imagem' />
						</div>
						<div>
							<span>Empresa</span>
							<h3>Titulo da vaga</h3>
							<span>R$2.000,00</span>
						</div>
					</ContainerInfo>
					<ContainerNew>
						<span>Nova</span>
					</ContainerNew>
					<div>
						<Button>Ver vaga</Button>
					</div>
				</Modal>
			</ContainerVagancy> */}
		</Container>
	);
}
