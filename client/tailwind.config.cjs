const defaultTheme = require("tailwindcss/defaultTheme")

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', defaultTheme.fontFamily.sans],
				mono: ['"DankMono"', defaultTheme.fontFamily.mono],
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
	},
	plugins: [],
}

module.exports = config
