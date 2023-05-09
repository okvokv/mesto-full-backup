import Popup from './Popup.js';
//гибридный элемент - всплывающее окно с картинкой ===========================
function ImagePopup(props) {

  return (
    <Popup
      opened={props.opened}
      type='image'
      onClose={props.onClose}
    >
      <img
        className="popup__image"
        src={`${props.selectedCard.link}`}
        alt={`Фото: ${props.selectedCard.name}`}
        //onClick={props.onClose}
      />
      <figcaption className="popup__image-text">{props.selectedCard.name}</figcaption>
    </Popup>
  );
};

export default ImagePopup;