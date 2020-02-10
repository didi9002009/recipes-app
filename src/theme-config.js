import { createMuiTheme } from '@material-ui/core/styles';
import { purple, indigo } from '@material-ui/core/colors';

const baseOptions = {
	mixins: {
		toolbar: {
			minHeight: 64
		}
	},
	typography: {
		fontSize: 16,
		h1: {
			fontWeight: 500,
			fontSize: '1.5rem'
		},
		h2: {
			fontWeight: 500,
			fontSize: '1.3125rem'
		},
		h3: {
			fontWeight: 500,
			fontSize: '1.125rem'
		},
		body1: {
			fontSize: '1rem'
		}
	},
	shape: {
		borderRadius: 8
	}
};

export const darkTheme = createMuiTheme({
	...baseOptions,
	palette: {
		type: 'dark',
		primary: {
			main: purple[300]
		}
	}
});

export const lightTheme = createMuiTheme({
	...baseOptions,
	palette: {
		type: 'light',
		primary: {
			main: indigo['A400']
		}
	}
});
