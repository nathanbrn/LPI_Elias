const express = require('express');
const server = express();
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

const PORT = 3000;

server.get('/users', async (req, res) => {
	const getAllUsers = await prisma.user.findMany();

	res.send(getAllUsers);
});

server.post('/users', async (req, res) => {
	try {
		const data = req.body;

		await prisma.user.create({
			data,
		});

		res.send('User created');
	} catch (err) {
		console.log(err);
	}
});

server.put('/users/:id', async (req, res) => {
	try {
		const data = req.body;
		const { id } = req.params;

		await prisma.user.update({
			data,
			where: {
				id,
			},
		});

		res.send('User updated');
	} catch (err) {
		console.log(err);
	}
});

server.delete('/users/:id', async (req, res) => {
	try {
		const { id } = req.params;

		await prisma.user.delete({
			where: {
				id,
			},
		});

		res.send('User deleted');
	} catch (err) {
		console.log(err);
	}
});

server.delete('/users', async (req, res) => {
	try {
		await prisma.user.deleteMany();

		res.send('All users deleted');
	} catch (err) {
		console.log(err);
	}
});

server.listen(PORT, () => {
	console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
