import { Header } from '../../components/Header';
import {
	ContainerVagancy,
	Modal,
	ContainerInfo,
	ContainerNew,
	Button,
	Image,
	Container,
} from './styles';

import { vagas } from '../../utils/vagas';

import LogoEnterprice from '../../assets/LogoEnterprice.jpg';

export function Vagas() {
	return (
		<>
			<Header />
			<Container>
				{vagas.map(vaga => (
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
			</Container>
		</>
	);
}
