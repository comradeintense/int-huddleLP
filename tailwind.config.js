/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				Violet: 'hsl(257, 40%, 49%)',
				'Soft-Magenta': 'hsl(300, 69%, 71%)',
			},
			fontFamily: {
				'Open-Sans': ['Open Sans', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

// Mobile font sizes:
// Build the community: Poppins - semibold - 48px - letter-spacing 0.5%
// Huddle re-imagines: Open-Sans - regular - 32px
// Register button: Poppins - regular - 24px
// Icon size with ring: 30x30px

// Desktop font sizes:
// Build the community: Poppins - semibold - 40px - letter-spacing 0.5%
// Huddle re-imagines: Open-Sans - regular - 18px
// Register button: Poppins - regular - 18px
// Icon size with ring: 42x42
