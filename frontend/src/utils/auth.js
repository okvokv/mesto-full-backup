import BaseApi from './BaseApi.js';
//параметры подключения: 
const baseUrl = 'https://auth.nomoreparties.co';
const headers = { 'Content-Type': 'application/json' };
class Auth extends BaseApi {
	constructor(baseUrl, headers) {
		super(baseUrl)
		this._baseUrl = baseUrl;
		this._headers = headers;
	};

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

	//метод авторизации зарегистрированного пользователя
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

	//метод аутентификации(отправки жетона для проверки)
	checkToken(_token) {
		return this._request('users/me', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${_token}`,
				// credentials: 'include',
			}
		})
	};

};

//инициализация класса авторизации
const auth = new Auth(baseUrl, headers);

export default auth;