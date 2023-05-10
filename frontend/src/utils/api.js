// информационные запросы
import BaseApi from './BaseApi.js';
class Api extends BaseApi {

	//метод получения данных пользователя
	_getUserData() {
		return this._request('users/me', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			}
		})
	};

	//метод получения массива карточек с сервера
	getAllCardsData() {
		return this._request('cards', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			}
		})
	};

	//метод получения начальных данных (общий)
	getInitialData() {
		return Promise.all([this._getUserData(), this.getAllCardsData()])
	};

	//метод замены аватара пользователя	
	setAvatar(_link) {
		return this._request('users/me/avatar', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			},
			body: JSON.stringify({
				avatar: _link
			})
		})
	};

	//метод сохранения данных пользователя в профиль на сервер
	setUserInfo(_name, _description) {
		return this._request('users/me', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			},
			body: JSON.stringify({
				name: _name,
				about: _description
			})
		})
	};

	//метод добавления новой карточки на сервер и получения информации о результате
	addNewCard(_cardName, _cardLink) {
		return this._request('cards', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			},
			body: JSON.stringify({
				name: _cardName,
				link: _cardLink
			})
		})
	};

	//метод удаления своей карточки на сервере и получения информации о результате
	deleteCard(_cardId) {
		return this._request(`cards/${_cardId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			}
		})
	};

	//метод установки лайка и получения данных о результате
	setLike(_cardId) {
		return this._request(`cards/${_cardId}/likes`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			}
		})
	};

	//метод удаления лайка (поставленного пользователем)
	deleteLike(_cardId) {
		return this._request(`cards/${_cardId}/likes`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: this._getToken(),
				credentials: 'include'
			}
		})
	};

};

//инициализация класса запросов к серверу
const api = new Api();

export default api;