import { useNavigate } from 'react-router-dom';
import {
	ButtonViewVagancy,
	ButtonOpenVagancy,
	Container,
	ContainerButton,
	Title,
} from './styles';

export function Header() {
	const navigate = useNavigate();

	function handleNavigateToHome() {
		navigate('/');
	}

	return (
		<Container>
			<Title onClick={handleNavigateToHome}>Job, Please!</Title>
			<ContainerButton>
				<ButtonViewVagancy href='/vagas'>Ver vagas</ButtonViewVagancy>
				<ButtonOpenVagancy href='/criar'>Abrir vaga</ButtonOpenVagancy>
			</ContainerButton>
		</Container>
	);
}
