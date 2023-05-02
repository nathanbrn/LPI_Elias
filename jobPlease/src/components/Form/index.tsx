import {
	Button,
	ContainerForm,
	ContainerInput,
	Input,
	InputCheck,
	Label,
	Span,
	TextArea,
	Title,
} from './styles';

import { api } from '../../utils/api';
import { VagaProps } from '../../types/vaga';

import { useState } from 'react';

export function Form() {
	const id = Math.random() * 1000;
	const destaque = true;
	const [titulo, setTitulo] = useState('');
	const [senioridade, setSenioridade] = useState('Estagiário');
	const [empresa, setEmpresa] = useState('');
	const [type, setType] = useState('Tempo Integral');
	const [hour, setHour] = useState('');
	const [remuneracao, setRemuneracao] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');
	const [requisitos, setRequisitos] = useState('');
	const [diferencial, setDiferencial] = useState('');
	const [beneficios, setBeneficios] = useState('');

	const vaga: VagaProps = {
		id,
		titulo: titulo,
		senioridade: senioridade,
		empresa: empresa,
		type: type,
		hour: hour,
		remuneracao: remuneracao,
		location: location,
		description: description,
		requisitos: requisitos,
		diferencial: diferencial,
		beneficios: beneficios,
		destaque,
	};

	function handleCreateNewVaga() {
		api
			.post('/', vaga)
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	return (
		<ContainerForm>
			<ContainerInput>
				<Title>
					Preencha os dados da melhor forma possível para encontrar mais rápido
					seu dev!
				</Title>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='title'>Título da vaga:</Label>
				<Input
					value={titulo}
					onChange={e => setTitulo(e.target.value)}
					placeholder='Digite o título da vaga'
					type='text'
					id='title'
				/>
				<Span>O título é o mais importante, seja claro e objetivo.</Span>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='senioridade'>Senioridade</Label>
				<InputCheck
					value={senioridade}
					onChange={e => setSenioridade(e.target.value)}
					name='senioridade'
					id='senioridade'>
					<option value='Estagiário'>Estagiário</option>
					<option value='Júnior'>Júnior</option>
					<option value='Pleno'>Pleno</option>
					<option value='Sênior'>Sênior</option>
				</InputCheck>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='tipo'>Tipo</Label>
				<InputCheck
					value={type}
					onChange={e => setType(e.target.value)}
					name='tipo'
					id='tipo'>
					<option value='Tempo Integral'>Tempo Integral</option>
					<option value='Meio periodo'>Meio periodo</option>
				</InputCheck>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='localizacao'>Localização:</Label>
				<Input
					value={location}
					onChange={e => setLocation(e.target.value)}
					placeholder='Digite a localização'
					type='text'
					id='localizacao'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='description'>Descrição da vaga:</Label>
				<TextArea
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder='Descreva as atividades do desenvolvedor'
					id='description'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='empresa'>Empresa contratante:</Label>
				<Input
					value={empresa}
					onChange={e => setEmpresa(e.target.value)}
					placeholder='Digite a empresa que vai contratar'
					type='text'
					id='empresa'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='salario'>Salário oferecido:</Label>
				<Input
					value={remuneracao}
					onChange={e => setRemuneracao(e.target.value)}
					placeholder='Digite o salário da vaga'
					type='text'
					id='salario'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='horas'>Horário:</Label>
				<Input
					value={hour}
					onChange={e => setHour(e.target.value)}
					placeholder='Digite o horário'
					type='text'
					id='horas'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='requisitos'>Requisitos:</Label>
				<Input
					value={requisitos}
					onChange={e => setRequisitos(e.target.value)}
					placeholder='Digite os requisitos'
					type='text'
					id='requisitos'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='diferencial'>Diferencial:</Label>
				<Input
					value={diferencial}
					onChange={e => setDiferencial(e.target.value)}
					placeholder='Digite os diferencial'
					type='text'
					id='diferencial'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='beneficios'>Beneficios:</Label>
				<Input
					value={beneficios}
					onChange={e => setBeneficios(e.target.value)}
					placeholder='Digite os beneficios'
					type='text'
					id='beneficios'
				/>
			</ContainerInput>
			<Button
				onClick={() => {
					handleCreateNewVaga();
					window.location.reload();
				}}>
				Enviar
			</Button>
		</ContainerForm>
	);
}
