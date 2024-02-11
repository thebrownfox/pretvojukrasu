<template>
	<div class="p-10 flex flex-col h-full items-center">
		<!-- <div
			class="flex flex-col items-center justify-center p-10 w-min m-auto"
		>
			<h2 class="font-serif text-5xl mb-3 whitespace-nowrap">
				Objavte svoju krásu
			</h2>
			<h3 class="text-xl text-center w-[120%]">
				Objavte miesto, kde krása a relaxácia splynú. Pridajte sa k nám
				na ceste k dokonalej pohode tela i duše.
			</h3>
			<UButton color="primary" size="lg" class="font-semibold mt-10"
				>Rezervovať termín</UButton
			>
		</div> -->
		<div class="hero-img2"></div>
		<!-- <div class="hero-img">
			<img src="/public/face.jpg" alt="" />
		</div> -->
		<div class="pt-16 w-full">
			<h2 class="font-serif text-5xl text-center mb-8">
				Populárne ošetrenia
			</h2>
			<div class="flex justify-center w-full flex-wrap">
				<div
					v-for="procedure in procedures"
					class="m-4 overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 mx-4 w-80"
				>
					<div
						class="px-4 py-5 sm:p-6 flex flex-col justify-between h-full"
					>
						<h3 class="text-xl font-medium mb-3">
							{{ procedure.title }}
						</h3>
						<p class="text-sm mb-3">{{ procedure.text }}</p>
						<div class="flex justify-end">
							<UBadge
								class="mr-1"
								color="soapstone"
								variant="subtle"
								size="sm"
								>{{
									new Intl.NumberFormat("sk-SK", {
										style: "currency",
										currency: "EUR",
									}).format(procedure.price)
								}}</UBadge
							>
							<UBadge size="sm" color="primary" variant="subtle"
								>{{ procedure.duration }} min</UBadge
							>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center">
				<UButton
					icon="i-humbleicons-plus-circle"
					color="primary"
					size="lg"
					class="font-semibold mt-10"
					variant="solid"
					to="/osetrenia"
					>Zobraziť všetky ošetrenia</UButton
				>
			</div>
		</div>
	</div>
</template>

<script setup>
import procedureGroups from "../assets/procedures.js";

const procedures = computed(() => {
	const onlyFavourites = procedureGroups
		.flatMap((group) => group.procedures)
		.filter((procedure) => procedure.isFavourite);
	const onlyFour = onlyFavourites.slice(0, 4);
	return onlyFour;
});
</script>

<style lang="scss" scoped>
.hero-img {
	width: 100%;
	img {
		padding: 5rem;
		width: 100%;
	}
}

.hero-img2 {
	width: calc(100% - 20px);
	overflow: hidden;
	min-height: 550px;
	flex-grow: 1;
	background-image: url("/public/face.jpg");
	background-size: cover;
	background-position: center center;
}
</style>
