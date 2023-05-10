// административные запросы
import BaseApi from './BaseApi.js';
class Auth extends BaseApi {
	constructor() {
		super();
		this._headers = { 'Content-Type': 'application/json' };
	}

	//метод регистрации пользователя
	registrate(_email, _password) {
		return this._request('signup', {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				email: _email,
				password: _password
			})
		})
	};

	//метод авторизации пользователя
	logIn(_email, _password) {
		return this._request('signin', {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				email: _email,
				password: _password
			})
		})
	};

};

//инициализация класса авторизации
const auth = new Auth();

export default auth;