export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

// export const checkValidity = (value, rules) => {
// 	let isValid = true;

// 	if (rules.required) {
// 		isValid = value.trim() !== '' && isValid;
// 	}
// 	if (rules.minLength) {
// 		isValid = value.length >= rules.minLength && isValid;
// 	}
// 	if (rules.maxLength) {
// 		isValid = value.length <= rules.maxLength && isValid;
// 	}
// 	if (rules.digit) {
// 		isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(value) && isValid;
// 	}
// 	if (rules.isEmail) {
// 		isValid =
// 			/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(value) &&
// 			isValid;
// 	}
// 	return isValid;
// };
