module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		
	},
	variants: {
		extend: {
			colors: {
				'main-color': 'var(--bg-main-color)',
				'ms-color': 'var(--bg-ms-color)',
				'ls-color': 'var(--bg-ls-color)',
			}
		}
	},
	plugins: []
};
