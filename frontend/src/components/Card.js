import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

//гибридный элемент одной карточки массива
function Card(props) {

	//подписка на контекст
	const currentUserData = React.useContext(CurrentUserContext);

	//проверка владельца
	const owned = (props.cardData.owner._id === currentUserData._id);

	//проверка наличия лайка на карточке
	const liked = props.cardData.likes.find(like => like._id === currentUserData._id);

	//промежуточные функции:

	function handleImageClick() {
		props.onImageClick(props.cardData);
	}

	function handleDeleteCardClick() {
		props.onCardDelete(props.cardData._id);
	}

	function handleLikeClick() {
		props.onLikeClick(props.cardData._id, liked)
	}

	return (
		<li className="element">

			<img
				className="element__image"
				src={`${props.cardData.link}`}
				alt={`Фото ${props.cardData.name}`}
				onClick={handleImageClick}
			/>

			{owned && <button className="element__trash-button" type="button" onClick={handleDeleteCardClick}></button>}

			<div className="element__caption">
				<h2 className="element__text">{props.cardData.name}</h2>
				<div className="element__group">
					<button
						className={`element__icon-button ${liked && 'element__icon-button_active'}`} type="button"
						onClick={handleLikeClick}>
					</button>
					<h2 className="element__counter">{props.cardData.likes.length}</h2>
				</div>
			</div>

		</li>
	);

};

export default Card;