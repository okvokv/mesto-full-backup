import { Navigate } from 'react-router-dom';
//функция перенаправления в зависимости от состояния индикатора входа пользователя
function ProtectedRoute({element: Component, ...props }) {
	return (
		props.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace />
	)
};

export default ProtectedRoute;