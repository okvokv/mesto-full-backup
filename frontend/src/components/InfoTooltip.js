import React from 'react';
import Popup from './Popup.js';
import successIcon from '../images/reg-success.svg';
import failureIcon from '../images/reg-failure.svg';

//гибридный элемент - всплывающее окно с сообщением о регистрации 
function InfoTooltip(props) {
	return (
		<Popup
			opened={props.opened}
			type='reginfo'
			onClose={props.onClose}
		>
			<div className="form">
				<img
					className="form__reg-icon"
					src={props.success ? successIcon : failureIcon}
					alt={props.success ? 'Галочка' : 'Крестик'}
				/>
				<p className="form__reg-message">{props.success ? 'Вы успешно зарегистрировались !' : 'Что-то пошло не так ! Пропробуйте ещё раз.'}</p>
			</div>
		</Popup>
	)
};

export default InfoTooltip;