//функция обработки инпутов в любых формах
function useForm(initialValues) {
	//задание значения инпутов в глобальной области
	const [values, setValues] = useState(initialValues);
//обработка изменений в полях ввода
	function handleChange(event) {
		const {value, name} = event.target;
		setValues({ ...values, [name]: value });
	};

	return {values, handleChange};
};

export default useForm;