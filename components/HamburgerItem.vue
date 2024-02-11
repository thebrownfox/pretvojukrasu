<template>
	<div class="hamburger-item" :class="{ 'is-button': isButton }">
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	isButton: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss">
$font-size: x-large !important;
.hamburger-item {
	padding: 1rem;

	&:not(.is-button) {
		a,
		span,
		div {
			font-size: $font-size;
		}
	}
}
</style>
