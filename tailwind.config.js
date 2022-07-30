module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		
	},
	variants: {
		extend: {
			colors: {
				'bg-main-color': 'var(--bg-main-color)',
				'bg-secondary-color': 'var(--bg-secondary-color)',
				'bg-ms-color': 'var(--bg-ms-color)',

			}
		}
	},
	plugins: []
};
