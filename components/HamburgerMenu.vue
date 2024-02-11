<template>
	<div class="hamburger-menu" :class="{ 'is-open': isOpen }">
		<div class="navbar">
			<div class="logo">
				<slot name="logo"></slot>
			</div>
			<HamburgerMenuButton v-model:is-open="isOpen" />
		</div>
		<nav v-if="isOpen">
			<slot></slot>
		</nav>
	</div>
</template>

<script setup>
const isOpen = ref(false);
watch(isOpen, (newValue) => {
	const value = newValue ? "hidden" : "auto";
	document.body.style.overflow = value;
});

const route = useRoute();
watch(
	() => route.name,
	() => (isOpen.value = false)
);
</script>

<style lang="scss" scoped>
$navbar-padding: 1.5rem;
.hamburger-menu {
	background-color: #fbf8f5;
	transition: all 300ms;
	display: flex;
	flex-direction: column;
	&:is(.is-open) {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 10;
		overflow: hidden;
		animation: positionFixed 500ms;
		.navbar-wrapper {
			position: relative;
		}
		.logo {
			height: 5rem;
			transform: translate(100%, 50%);
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		padding-top: 8.5rem;
		align-items: center;
		// justify-content: center;
	}
}

.logo {
	height: 3rem;
	transition: all 300ms;
}
.navbar-wrapper {
	padding: 1.5rem;
}
.navbar {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;
}

@keyframes positionFixed {
	0% {
		position: static;
	}
	100% {
		position: fixed;
	}
}
</style>
