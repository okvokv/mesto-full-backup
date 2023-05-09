import { useState } from 'react';

//гибридный элемент - страница регистрации
function Register(props) {

  //объявление данных регистрации в глобальной области
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //------------------------------------------------------------------------
  //функция изменения почты
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  };

  //функция изменения пароля
  function handleChangePassword(event) {
    setPassword(event.target.value);
  };

  //промежуточная функция переключения страницы
  function handleClick() {
    props.onTogglePage()
  };

  //промежуточная функция отправки данных
  function handleSubmit(event) {
    event.preventDefault();
    props.onRegistration(email, password);
  };

  return (
    //секция с формой регистрации ======================================== 
    <section className="registration" >
      <form className="form form__theme-dark" name="regForm" onSubmit={handleSubmit}>
        <h2 className="form__title form__title_theme-dark">Регистрация</h2>
        <input
          className="form__field form__field_theme-dark"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          autoFocus
          required />
        <span className="form__error-message" id="email-error"></span>
        <input
          className="form__field form__field_theme-dark"
          type="password"
          placeholder="Пароль"
          name="pwd"
          minLength="8"
          maxLength="100"
          value={password}
          onChange={handleChangePassword}
          required
        />
        <span className="form__error-message" id="pwd-error"></span>
        <button
          className="form__submit-button form__submit-button_theme-dark"
          type="submit"
          aria-label="кнопка Зарегистрироваться">{props.btnText}
        </button>
        <div className="form__reg-caption">
          <p>Уже зарегистированы ?</p>
          <p className="form__reg-link" onClick={handleClick}>&nbsp; Войти</p>
        </div>
      </form>
    </section>
  );

};

export default Register;