<template>
	<div class="w-full h-full flex justify-center flex-col items-center">
		<h3 class="font-serif text-4xl text-center mt-8 mb-10">
			Vyberte si prevádzku
		</h3>
		<!-- <div class="flex flex-col">
			<UButton
				color="primary"
				size="xl"
				class="font-semibold outline outline-1 text-center"
				variant="soft"
				to="https://services.bookio.com/pre-tvoju-krasu-uzf94i8u/widget?lang=sk"
			>
				<span class="flex w-full justify-center">Miniclinic</span>
			</UButton>
			<div class="my-5 text-center">alebo</div>
			<UButton
				color="primary"
				size="xl"
				class="font-semibold outline outline-1 text-center"
				variant="soft"
				to="https://services.bookio.com/pre-tvoju-krasu-mc7p5l4z/widget?lang=sk"
			>
				<span class="flex w-full justify-center">Malý raj</span>
			</UButton>
		</div> -->

		<UDropdown :items="places" :popper="{ placement: 'bottom-start' }">
			<UButton
				color="primary"
				size="xl"
				class="font-semibold outline outline-1 text-center"
				variant="soft"
				:label="selected || 'Vyberte prevádzku'"
				trailing-icon="i-heroicons-chevron-down-20-solid"
			/>
		</UDropdown>

		<div class="mt-10 w-[80%]">
			<!-- FIXME: Not the way things should be I guess -->
			<component
				:is="'script'"
				type="text/javascript"
				src="https://bookio-services-eu.s3.eu-central-1.amazonaws.com/assets/widget.bookio.js"
			></component>
			<iframe
				v-if="selected === 'Miniclinic'"
				id="bookio-iframe"
				src="https://services.bookio.com/pre-tvoju-krasu-uzf94i8u/widget?lang=sk&hiddenHeader=true"
				width="100%"
				onload="initBookioWidget()"
				scrolling="no"
			></iframe>
			<iframe
				v-if="selected === 'Malý raj'"
				id="bookio-iframe"
				src="https://services.bookio.com/pre-tvoju-krasu-mc7p5l4z/widget?lang=sk"
				width="100%"
				onload="initBookioWidget()"
				scrolling="no"
			></iframe>
		</div>
	</div>
</template>

<script setup>
const selectOption = (value) => {
	selected.value = value;
};

const selected = ref("");
const places = [
	[
		{
			label: "Malý raj",
			click: () => selectOption("Malý raj"),
		},
		{
			label: "Miniclinic",
			click: () => selectOption("Miniclinic"),
		},
	],
];
</script>

<style lang="scss" scoped></style>
