export const fetchData = async () => {
	const response = await fetch('/api/data')
	return response.json()
}
