// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "nuxt-viewport", "nuxt-gtag"],
	colorMode: {
		preference: "light",
	},
	ui: {
		icons: ["humbleicons"],
	},
	viewport: {
		breakpoints: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1536,
		},

		defaultBreakpoints: {
			desktop: "lg",
			mobile: "xs",
			tablet: "md",
		},

		fallbackBreakpoint: "lg",
	},
	gtag: {
		id: "G-LJ6B8JLXRZ",
	},
});
