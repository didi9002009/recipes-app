export const form = {
	title: 'Добави рецепта',
	fields: [
		{
			id: 'title',
			label: 'Заглавие на рецептата',
			multiline: false
		},
		{
			id: 'timeToCook',
			label: 'Време за приготвяне',
			multiline: false
		},
		{
			id: 'portions',
			label: 'Брой порции',
			multiline: false
		},
		{
			id: 'ingredients',
			label: 'Необходими съставки',
			helperText: 'Избройте съставките разделени със запетая',
			multiline: true
		},
		{
			id: 'instructions',
			label: 'Начин на приготвяне',
			multiline: true
		}
	],
	button: 'Добави рецептата',
	errorMessage: 'Полето е задължително'
};
