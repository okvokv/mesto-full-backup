// административные запросы
import BaseApi from './BaseApi.js';
class Auth extends BaseApi {
	constructor(){
		super();
		this.headers = {'Content-Type': 'application/json'};
	}
	
	//метод регистрации пользователя
	registrate(_email, _password) {
		return this._request('signup', {
			method: 'POST',
			headers: this.headers,
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
			headers: this.headers,
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
				authorization: `Bearer ${_token}`, // отсылать жетон или
				credentials: 'include', // отсылать куки при расположении b/f на разных доменах
			}
		})
	};

};

//инициализация класса авторизации
const auth = new Auth();

export default auth;