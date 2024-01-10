<template>
	<div class="h-full flex flex-col">
		<header class="flex px-6 py-4">
			<div class="flex flex-1 navbar-item items-center">
				<ULink
					to="/"
					class="text-xl px-2"
					active-class="text-honey-flower-900 underline"
					inactive-class="text-black hover:underline"
					exact
					>Úvod</ULink
				>
				<ULink
					to="/osetrenia"
					class="text-xl px-2"
					active-class="text-honey-flower-900 underline"
					inactive-class="text-black hover:underline"
					exact
					>Ošetrenia</ULink
				>
				<ULink
					to="/kontakt"
					class="text-xl px-2"
					active-class="text-honey-flower-900 underline"
					inactive-class="text-black hover:underline"
					exact
					>Kontakt</ULink
				>
			</div>
			<div class="logo justify-self-center shrink">
				<img src="~/assets/logo_black.svg" alt="" srcset="" />
			</div>
			<div class="flex flex-1 navbar-item justify-end items-center">
				<UButton color="primary" size="lg" class="font-semibold"
					>Rezervovať termín</UButton
				>
			</div>
		</header>
		<div class="flex-grow">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
		<footer>
			<div class="p-8 flex justify-center items-center">
				<div class="footer-logo m-8">
					<img src="~/assets/logo_black.svg" alt="" srcset="" />
				</div>
				<div>
					<div class="flex items-center p-1">
						<UIcon name="i-humbleicons-map" class="text-2xl" /><span
							class="ml-3"
							>M.A. Bazovského 26, Slovenský Grob</span
						>
					</div>
					<div class="flex items-center p-1">
						<UIcon name="i-humbleicons-phone" class="text-2xl" />
						<span class="ml-3">0944 336 242</span>
					</div>
					<div class="flex items-center p-1">
						<UIcon name="i-humbleicons-mail" class="text-2xl" />
						<span class="ml-3">info@pretvojukrasu.sk</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alice&display=swap");
// TODO: Load only those that we use
@import "node_modules/lato-font/css/lato-font.css";

html,
body,
#__nuxt {
	height: 100%;
	// soapstone-50
	background-color: #fbf8f5;
}

img {
	height: 100%;
}
.logo {
	height: 7rem;
}
.footer-logo {
	height: 5rem;
}
header {
	width: 100%;
}
.navbar-item {
	height: 3rem;
	margin: 1rem;
}
</style>
