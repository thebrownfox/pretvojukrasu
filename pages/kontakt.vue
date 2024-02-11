<template>
	<div class="w-full flex flex-col h-full">
		<div>
			<h3 class="font-serif text-4xl text-center mt-10 mb-10">Kontakt</h3>
			<div class="flex flex-wrap justify-center">
				<div class="mx-3">
					<div class="flex items-center p-1">
						<UIcon name="i-humbleicons-phone" class="text-2xl" />
						<span class="ml-3"
							><a href="tel:+421944336242">0944 336 242</a></span
						>
					</div>
					<div class="flex items-center p-1">
						<UIcon name="i-humbleicons-mail" class="text-2xl" />
						<span class="ml-3"
							><a href="mailto:info@pretvojukrasu.sk"
								>info@pretvojukrasu.sk</a
							></span
						>
					</div>
				</div>
				<div class="mx-3">
					<div class="flex items-center p-1">
						<UIcon
							name="i-humbleicons-brand-facebook"
							class="text-2xl"
						/>
						<span class="ml-3"
							><a href="https://www.facebook.com/pretvojukrasu"
								>facebook.com/pretvojukrasu</a
							>
						</span>
					</div>
					<div class="flex items-center p-1">
						<UIcon
							name="i-humbleicons-brand-instagram"
							class="text-2xl"
						/>
						<span class="ml-3"
							><a href="https://www.instagram.com/pretvojukrasu/">
								@pretvojukrasu</a
							></span
						>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center flex-grow">
			<h3 class="font-serif text-4xl text-center mt-8 mb-10">
				Prevádzky
			</h3>
			<div class="flex flex-wrap min-w-[80%] flex-grow justify-center">
				<div class="flex flex-col p-2 min-w-[50%]">
					<h4 class="font-serif weigh text-3xl mb-1">Malý raj</h4>
					<div
						class="flex flex-col text-sm mb-4 font-serif text-gray-600"
					>
						<span>M. A. Bazovského 26</span>
						<span>Slovenský Grob</span>
					</div>
					<iframe
						width="100%"
						height="100%"
						style="border: 0"
						loading="lazy"
						allowfullscreen
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_3ak1HKRbEcRxivWVwFZe7A&key=AIzaSyDn9OqV5TsFW7ESn0JannM3u99NFifXvlw"
					></iframe>
				</div>
				<div class="flex flex-col p-2 min-w-[50%]">
					<h4 class="font-serif weigh text-3xl mb-1">Miniclinic</h4>
					<div
						class="flex flex-col text-sm mb-4 font-serif text-gray-600"
					>
						<span>Jantárová 2</span>
						<span>Chorvátsky Grob</span>
					</div>
					<iframe
						width="100%"
						height="100%"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.5855646510086!2d17.246751177190607!3d48.233854344452546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c9165d13f2391%3A0xf7dd4b62177d154d!2sPre%20tvoju%20kr%C3%A1su!5e0!3m2!1ssk!2ssk!4v1707689208334!5m2!1ssk!2ssk"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.google-maps {
	position: relative;
	padding-bottom: 75%; // This is the aspect ratio
	height: 0;
	overflow: hidden;
}
.google-maps iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100% !important;
	height: 100% !important;
}
</style>
