export const remakeDate = (date : string | undefined) => {
	const re = /\d{4}[-]\d{2}[-]\d{2}/;

	const applyRegex = date?.match(re);
	const newDate = applyRegex? applyRegex[0] : '';
	return newDate;
};