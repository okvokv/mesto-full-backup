//общая часть запроса и его обработка
export default class BaseApi {
	constructor() {
		//параметры подключения: 
		this._baseUrl = 'https://okvokv-back.students.nomoredomains.monster';
	}

	_getToken() {
		return `Bearer ${localStorage.getItem('jwt')}`
	}

	_request(_endUrl, _options) {
		return fetch(`${this._baseUrl}/${_endUrl}`, _options)
			.then(res => {
				if (res.ok) {
					//если запрос выполнен
					return res.json();
				}
				//если сервер вернул ошибку, отклонить промис
				return Promise.reject(`Ошибка: ${res.status}`)
			})
	};

};