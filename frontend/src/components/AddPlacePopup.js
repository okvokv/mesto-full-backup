import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

//гибридный элемент - всплывающее окно добавления контента
function CardAddPopup(props) {

	//объявление данных карточки в глобальной области
	const [cardName, setCardName] = useState('');
	const [cardLink, setCardLink] = useState('');

	//функция задания названия
	function handleSetName(event) {
		setCardName(event.target.value)
	}

	//функция задания ссылки
	function handleSetLink(event) {
		setCardLink(event.target.value)
	}

	//промежуточная функция отправки данных карточки
	function handleSubmit(event) {
		event.preventDefault();
		props.changeBtnText('Сохранение...');
		props.onCardAdd(cardName, cardLink);
	};

	//функция очистки формы после успешной отправки данных
	useEffect(() => {
		setCardName('');
		setCardLink('');
	}, [props.reset]);

	return (
		<PopupWithForm
			type={'card'}
			formTitle='Новое место'
			btnText={props.btnText}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			{/* == ядро с формой добавления контента ===============================*/}
			<input
				className="form__field form__field_type_cardname"
				type="text"
				placeholder="Название"
				name="cardName"
				minLength="2"
				maxLength="30"
				value={cardName}
				onChange={handleSetName}
				autoFocus
				required
			/>
			<span className="form__error-message" id="cardName-error"></span>
			<input
				className="form__field form__field_type_cardlink"
				type="url"
				placeholder="Ссылка на картинку"
				name="cardLink"
				value={cardLink}
				onChange={handleSetLink}
				required
			/>
			<span className="form__error-message" id="cardLink-error"></span>
		</PopupWithForm>
	);
};

export default CardAddPopup;