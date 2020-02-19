export const form = {
	titleAdd: 'Добави рецепта',
	titleEdit: 'Промени рецепта',
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
	buttonAdd: 'Добави рецептата',
	buttonEdit: 'Промени рецептата',
	errorMessage: 'Полето е задължително'
};
