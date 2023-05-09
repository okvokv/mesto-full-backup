//общая часть запроса и его обработка
export default class BaseApi {
	constructor(baseUrl) {
		this._baseUrl = baseUrl;
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