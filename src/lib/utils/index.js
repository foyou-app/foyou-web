import { intersection } from 'lodash';
import UseAuth from '../hooks/useAuth';

export function isLoggedIn() {
	/*
		* Note:
		*  This app assume if local storage have roles it means
		*  user is authenticated you can update this logic as per your app.
	*/
	return !!localStorage.getItem('roles')
}

export function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}

export function getAllowedRoutes(routes) {

    const { getProfile } = UseAuth();
  

	const profile = !!getProfile?getProfile():null;
    console.log(profile.role);
    let roles =[profile.role];

	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}