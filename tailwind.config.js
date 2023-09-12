/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Space Grotesk', 'serif']
			}
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '5rem'
			}
		}
	},
	plugins: []
};
