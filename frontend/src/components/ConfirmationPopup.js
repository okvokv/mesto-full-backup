import PopupWithForm from './PopupWithForm.js';
//гибридный элемент - попап подтверждения удаления карточки
function PopupWithConfirmation(props) {
	
	//промежуточная функция обработки запроса на удаление
	function handleSubmit(event) {
		event.preventDefault();
		props.changeBtnText('Удаление...');
		props.onCardDelete(props.clickedImage)
	};

	return (
		<PopupWithForm
			type='delConfirm'
			formTitle='Вы уверены ?'
			btnText={props.btnText}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		/>
	);
};

export default PopupWithConfirmation;