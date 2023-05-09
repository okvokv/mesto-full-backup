import React, {useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';

//гибридный элемент - всплывающее окно смены аватара
function AvatarEditPopup(props) {

	//задание рефа
	const avatarLink = React.useRef('');

	//промежуточная функция отправки ссылки
	function handleSubmit(event) {
		event.preventDefault();
		props.changeBtnText('Сохранение...');
		props.onUpdateAvatar(avatarLink.current.value);
	}

	//функция очистки формы после успешной отправки данных
	useEffect(() => {
		avatarLink.current.value = '';
	}, [props.reset])

	return (
		<PopupWithForm
			type='avatar'
			formTitle='Обновить аватар'
			btnText={props.btnText}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			{/* == ядро с формой смены аватара ===================================*/}
			<input
				className="form__field form__field_type_avatarlink"
				type="url"
				placeholder="Ссылка на аватар"
				name="avatarLink"
				ref={avatarLink}
				autoFocus
				required
			/>
			<span className="form__error-message" id="avatarLink-error"></span>
		</PopupWithForm>
	);
};
export default AvatarEditPopup;