<template>
	<div class="w-full">
		<div class="py-8" v-for="group in procedureGroups">
			<h3 class="font-serif text-4xl text-center mt-8 mb-10">
				{{ group.groupName }}
			</h3>
			<div class="flex justify-center w-full flex-wrap">
				<div
					v-for="procedure in group.procedures"
					class="my-4 mx-4 overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 w-80"
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
		</div>
	</div>
</template>

<script setup>
import procedureGroups from "../assets/procedures.js";
</script>

<style lang="scss" scoped></style>
