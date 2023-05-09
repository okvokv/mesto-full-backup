import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

//гибридный элемент 
function Main(props) {

	//подписка на контекст
	const currentUserData = React.useContext(CurrentUserContext);

	return (
		<main className="main">

			{/*== Секция профиль ===============================================*/}
			<section className="profile">
				<button
					className="profile__avatar-button"
					type="button"
					aria-label="кнопка Редактировать аватар"
					onClick={props.onAvatarBtnClick}>
					<img className="profile__avatar" src={currentUserData.avatar} alt="Аватар" />
				</button>
				<div className="profile__info">
					<div className="profile__title-group">
						<h1 className="profile__title">{currentUserData.name}</h1>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="кнопка Редактировать профиль"
							onClick={props.onProfileBtnClick}>
						</button>
					</div>
					<p className="profile__subtitle">{currentUserData.about}</p>
					<p className="profile__id" hidden>{currentUserData._id}</p>
				</div>

				<button
					className="profile__add-button"
					type="button"
					aria-label="кнопка добавления контента"
					onClick={props.onCardBtnClick}>
				</button>
			</section>

			{/*== Секция элементы ===============================================*/}
			<section className="elements">
				<ul className="elements__grid">
					{props.cardsData.map(cardData => (
						<Card
							key={cardData._id}
							cardData={cardData}
							onImageClick={props.onImageClick}
							onCardDelete={props.onCardDelete}
							onLikeClick={props.onLikeClick}
						/>)
					)}
				</ul>
			</section >

		</main >
	);

};

export default Main;