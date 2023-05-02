export interface VagaProps {
	id?: number;

	titulo: string;
	senioridade: string;
	empresa: string;
	type: string;
	hour: string;
	remuneracao: string;
	location: string;
	description: string;
	requisitos: string;
	diferencial: string;
	beneficios: string;

	destaque?: boolean;
}