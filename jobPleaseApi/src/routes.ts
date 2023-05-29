import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const router = express.Router();

router.get('/', async (req, res) => {
	const vagas = await prisma.vaga.findMany();

	res.status(200).json(vagas);
});

router.get('/destaques', async (req, res) => {
	const vagas = await prisma.vaga.findMany({
		where: {
			destaque: true,
		},
	});

	res.status(200).json(vagas);
});

router.post('/', async (req, res) => {
	const {
		titulo,
		senioridade,
		empresa,
		type,
		hour,
		remuneracao,
		location,
		description,
		requisitos,
		diferencial,
		beneficios,
		link,
	} = req.body;

	let destaque = false;

	if (
		remuneracao !== '' &&
		description !== '' &&
		hour !== '' &&
		beneficios !== ''
	) {
		destaque = true;
	}

	await prisma.vaga.create({
		data: {
			titulo,
			senioridade,
			empresa,
			type,
			hour,
			remuneracao,
			location,
			description,
			requisitos,
			diferencial,
			beneficios,
			link,
			destaque,
		},
	});

	res.status(201).json(null);
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;

	await prisma.vaga.update({
		where: { id },
		data: {
			...req.body,
		},
	});

	res.status(200).json(null);
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	await prisma.vaga.delete({
		where: {
			id,
		},
	});

	res.status(204).json(null);
});
