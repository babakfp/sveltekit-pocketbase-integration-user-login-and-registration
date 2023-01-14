/**
 * @param {any} objectToClone
 */
export function structuredClone(objectToClone) {
	const stringified = JSON.stringify(objectToClone)
	const parsed = JSON.parse(stringified)
	return parsed
}
