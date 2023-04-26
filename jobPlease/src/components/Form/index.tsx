import {
	Button,
	ContainerForm,
	ContainerInput,
	Input,
	Label,
	Span,
	TextArea,
	Title,
} from './styles';

export function Form() {
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
				<Input placeholder='Digite o título da vaga' type='text' id='title' />
				<Span>O título é o mais importante, seja claro e objetivo.</Span>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor=''>Descrição da vaga:</Label>
				<TextArea
					placeholder='Descreva as atividades do desenvolvedor'
					id='description'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='description'>Empresa contratante:</Label>
				<Input placeholder='Digite a empresa que vai contratar' type='text' />
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='email'>E-mail para contato:</Label>
				<Input
					placeholder='Digite o e-mail para contato'
					type='email'
					id='email'
				/>
			</ContainerInput>
			<ContainerInput>
				<Label htmlFor='salario'>Salário oferecido:</Label>
				<Input
					placeholder='Digite o salário da vaga'
					type='text'
					id='salario'
				/>
			</ContainerInput>

			<Button>Enviar</Button>
		</ContainerForm>
	);
}
