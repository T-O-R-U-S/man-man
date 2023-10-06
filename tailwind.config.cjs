/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	// Some colours are dynamically constructed. Tailwind does not like this :^(
	safelist: [
		// Straight-up colours
		'bg-blue-500',
		'bg-orange-500',
		'bg-yellow-500',
		'bg-purple-500',
		'bg-green-500',
		// Gradients
		'from-blue-400', 'to-blue-700',
		'from-orange-400', 'to-orange-700',
		'from-yellow-400', 'to-yellow-700',
		'from-purple-400', 'to-purple-700',
		'from-green-400', 'to-green-700',
		'blur'
	]
}
