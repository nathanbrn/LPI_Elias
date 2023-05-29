import axios from 'axios';

async function fetchUser() {
	try {
		const request = await axios.get('http://localhost:3000/users');
		const users = request.data;

		const user = users
			.map(
				(user, index) => `
              <div class="user-card">
                <h3>Usuário ${index + 1}</h3>
                <p>Nome: ${user.name}</p>
                <p>Idade: ${user.age}</p>
                <p>Email: ${user.email}</p>
                <p>Cidade: ${user.city}</p>
                <p>País: ${user.country}</p>
                <p>Telefone: ${user.phone}</p>
                <p>Data de Nascimento: ${user.dateStart}</p>
              </div>
            `
			)
			.join('');

		document.querySelector('.user-container').innerHTML += user;
	} catch (err) {
		document.querySelector(
			'.user-container'
		).innerHTML = `<h4>Erro ao carregar os usuários</h4>`;
	}
}

fetchUser();


const created = document.getElementById('created');

const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const city = document.getElementById('city');
const country = document.getElementById('country');
const dateStart = document.getElementById('dateStart');
const phone = document.getElementById('phone');


async function createdUser() {
  const user = {
	name: name.value,
	age: age.value,
	email: email.value,
	city: city.value,
	country: country.value,
	dateStart: dateStart.value,
	phone: phone.value,
  }

  try {
	await axios.post('http://localhost:3000/users', user);
  } catch (err) {
	console.log(err);
  }
}

created.addEventListener('click', (e) => {
  e.preventDefault();

  createdUser();

  window.location.reload();
})
