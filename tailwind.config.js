/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
};

tailwind.config = {
	darkMode: "class",
	theme: {
		screens: {
			sm: "600px",
			md: "860px",
			lg: "1024px",
		},
	},
};
