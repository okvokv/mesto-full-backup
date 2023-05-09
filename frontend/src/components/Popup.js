import { useEffect } from 'react';
//гибридный компонент Popup для обертки любых попапов
function Popup (props) {
	//обработка нажатия на Escape
	useEffect(() => {
		function closeByEscape(event) {
			if (event.key === 'Escape') {
				props.onClose();
			}
		};

		if (props.opened) {
			document.addEventListener('keydown', closeByEscape)
			//удаление обработчика в `clean-up` функции
			return function () { document.removeEventListener('keydown', closeByEscape) };
		};
	}, [props.opened, props])

	//обработка нажатия на оверлей
	function closeByOverlayClick(event) {
		if (event.target === event.currentTarget) {
			props.onClose();
		};
	};

	return (
		<div
			className={`popup popup_type_${props.type} ${props.opened && 'popup_opened'}`}
			onClick={closeByOverlayClick}
		>
			<div className="popup__container">
				<button
					className="popup__close-button"
					type="button"
					aria-label="кнопка Закрыть"
					onClick={props.onClose}
				>
				</button>

				{/* сюда загружается ядро любого попапа */}
				{props.children}

			</div>
		</div>
	);
};

export default Popup;