import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

//гибридный элемент - всплывающее окно редактирования профиля
function ProfileEditPopup(props) {

	//подписка на контекст
	const currentUserData = React.useContext(CurrentUserContext);

	//объявление частных данных в глобальной области
	const [name, setName] = useState(currentUserData.name);
	const [description, setDescription] = useState(currentUserData.about);

	//задание обновления данных пользователя
	useEffect(() => {
		setName(currentUserData.name);
		setDescription(currentUserData.about);
	}, [currentUserData, props.opened]);

	//------------------------------------------------------------------------
	//функция изменения имени
	function handleChangeName(event) {
		setName(event.target.value);
	}

	//функция изменения описания
	function handleChangeDescription(event) {
		setDescription(event.target.value);
	}

	//промежуточная функция отправки содержания
	function handleSubmit(event) {
		event.preventDefault();
		props.changeBtnText('Сохранение...');
		props.onUpdateUser(name, description);
	};

	//----------------------------------------------------------------------
	return (
		<PopupWithForm
			type='profile'
			formTitle='Редактировать профиль'
			btnText={props.btnText}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			{/* == ядро с формой редактирования профиля ====================*/}
			<input
				className="form__field form__field_type_name"
				type="text"
				placeholder="Имя"
				name="name"
				minLength="2"
				maxLength="50"
				value={name}
				onChange={handleChangeName}
				autoFocus
				required
			/>

			<span className="form__error-message" id="name-error"></span>

			<input
				className="form__field form__field_type_description"
				type="text"
				placeholder="О себе"
				name="description"
				minLength="2"
				maxLength="200"
				value={description}
				onChange={handleChangeDescription}
				required
			/>

			<span className="form__error-message" id="description-error"></span>
		</PopupWithForm>
	);
};

export default ProfileEditPopup;