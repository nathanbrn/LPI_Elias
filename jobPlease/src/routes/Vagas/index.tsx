import { Header } from '../../components/Header';
import {
	Container,
	ContainerDados,
	ContainerDescription,
	ContainerHeader,
	ContainerInfo,
	ContainerInfoDados,
	ContainerRemuneration,
	ContainerTitleVaga,
	ContainerVagas,
	Title,
} from './styles';
import { Money, Suitcase, Check, Timer } from '@phosphor-icons/react';

import emptyList from '../../assets/emptyList.png';

import { api } from '../../utils/api';

import LogoEnterprice from '../../assets/LogoEnterprice.jpg';
import { useEffect, useState } from 'react';
import { VagaProps } from '../../types/vaga';
import ReactLoading from 'react-loading';

export function Vagas() {
	const [vaga, setVaga] = useState<number>();
	const [vagasApi, setVagasApi] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api
			.get('/')
			.then(({ data }) => {
				setTimeout(() => {
					setVagasApi(data);
					setIsLoading(false);
				}, 3000);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#FFF',
				}}>
				{isLoading ? (
					<ReactLoading type='bubbles' width='10%' color='#f0e68c' />
				) : vagasApi.length > 0 ? (
					<Container>
						<ContainerVagas>
							{vagasApi.map((vaga: VagaProps) => (
								<button
									onClick={() => setVaga(vaga.id)}
									key={vaga.id}
									style={{
										border: '1px solid rgba(0, 0, 0, 0.1)',
										borderRadius: '8px',
										padding: '12px',

										display: 'flex',
										flexDirection: 'column',
										gap: '18px',

										cursor: 'pointer',

										backgroundColor: '#F0E68C',
									}}>
									<ContainerHeader>
										<div>
											<img width={50} height={50} src={LogoEnterprice} alt='' />
										</div>
										<div
											style={{
												textAlign: 'left',
											}}>
											<h2>{vaga.titulo}</h2>
											<p>{vaga.empresa}</p>
											<p>{vaga.location}</p>
											<p>{vaga.senioridade}</p>
										</div>
									</ContainerHeader>
									<ContainerRemuneration>
										<span>
											<Money />
											R$ {vaga.remuneracao}
										</span>
										<span>
											<Suitcase />
											Tempo integral
											<Check />
										</span>
										<span>
											<Timer />8 horas diárias
										</span>
									</ContainerRemuneration>
								</button>
							))}
						</ContainerVagas>
						<ContainerInfo>
							{vagasApi
								.filter((v: VagaProps) => v.id === vaga)
								.map((vaga: VagaProps) => (
									<div
										style={{
											padding: '12px',

											display: 'flex',
											flexDirection: 'column',
											gap: '18px',
										}}>
										<ContainerTitleVaga>
											<h2>{vaga.titulo}</h2>
											<div>
												<span>R$ {vaga.remuneracao},00</span>
												<span>{vaga.location}</span>
												<span>{vaga.senioridade}</span>
											</div>
											<button>Candidatar-se a vaga</button>
										</ContainerTitleVaga>
										<ContainerDados>
											<div>
												<Title>Dados da vaga</Title>
											</div>
											<ContainerInfoDados>
												<div>
													<h4>Tipo de vaga</h4>
													<p>{vaga.type}</p>
												</div>
												<div>
													<h4>Horário</h4>
													<p>{vaga.hour}</p>
												</div>
											</ContainerInfoDados>
										</ContainerDados>
										<ContainerDescription>
											<h3>Descrição</h3>
											<p>{vaga.description}</p>
											<div>
												<div>
													<h5>Requisitos</h5>
													<ul>{vaga.requisitos}</ul>
												</div>
												<div>
													<h5>Diferencial</h5>
													<ul>{vaga.diferencial}</ul>
												</div>
												<div>
													<h5>Beneficios</h5>
													<ul>{vaga.beneficios}</ul>
												</div>
											</div>
										</ContainerDescription>
									</div>
								))}
						</ContainerInfo>
					</Container>
				) : (
					<img src={emptyList} alt='' />
				)}
			</div>
		</>
	);
}
