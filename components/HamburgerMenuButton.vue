<template>
	<div class="menu-wrapper" :class="{ 'is-open': isOpen }" @click="toggle()">
		<div class="menu-bar"></div>
		<div class="menu-bar"></div>
		<div class="menu-bar"></div>
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["update:isOpen"]);
const toggle = () => {
	emit("update:isOpen", !props.isOpen);
};
</script>

<style lang="scss" scoped>
$size: 2.5rem;
.menu-wrapper {
	display: flex;
	flex-direction: column;
	height: $size;
	width: $size;

	.menu-bar {
		background-color: #000;
		margin: 0.3rem 0;
		width: 100%;
		flex-grow: 1;
		transition: all 300ms;
	}

	&:is(.is-open) {
        .menu-bar:nth-of-type(1) {
            width: calc(1.410 * #{$size});
			transform: rotate(45deg);
            transform-origin: 15% 0%;
		}
		.menu-bar:nth-of-type(2) {
			visibility: hidden;
			transition: all 0ms;
		}
        .menu-bar:nth-of-type(3) {
            width: calc(1.410 * #{$size});
			transform: rotate(-45deg);
            transform-origin: 15% 100%;
		}
	}
}
</style>
