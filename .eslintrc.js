module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ["@nuxtjs", "prettier"],
	// add your custom rules here
	rules: {
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"vue/multi-word-component-names": "off",
	},
};
