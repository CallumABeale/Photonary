<script setup lang="ts">
const route = useRoute();
const photo = ref(route.query.photo as string);
const text = ref('Hello world');
const opacitySlider = ref(100);
const fontSlider = ref(40);
const blurSlider = ref(0);

const blurSliderComputer = computed(() => blurSlider.value * 10);

const attributes = reactive({
	effect: {
		alt: 'test',
		width: '500',
		height: '500',
		src: photo,
		opacity: opacitySlider,
		blur: blurSliderComputer,
		overlays: [
			{
				position: {
					gravity: 'south',
					y: 120,
				},
				text: {
					color: 'blue',
					fontFamily: 'Source Sans Pro',
					fontSize: fontSlider,
					text: text || ' ',
				},
			},
		],
	},
});
</script>

<template>
	<div class="flex flex-col items-center gap-4 w-3/4 m-auto">
		<h1 class="font-extrabold text-4xl">Select Customisations</h1>
		<div class="grid grid-cols-2 gap-4">
			<section class="flex flex-col gap-4">
				<div
					class="border-2 border-blue-300 p-4 flex flex-col gap-4 rounded">
					<h2 class="text-3xl">Enter Text To Add To Image</h2>
					<input
						v-model="text"
						type="text"
						class="bg-gray-200 p-4 rounded"
						placeholder="Enter Text" />
				</div>
				<ImageSlider
					v-model="opacitySlider"
					class="border border-purple-300 rounded-sm"
					>Opacity</ImageSlider
				>
				<ImageSlider
					v-model="fontSlider"
					class="border border-green-300 rounded-sm"
					>Font Size</ImageSlider
				>
				<ImageSlider
					v-model="blurSlider"
					class="border border-orange-300 rounded-sm"
					>Blur</ImageSlider
				>
				<section class="flex items-center justify-center gap-4">
					<!-- TODO: These should be toggles not set buttons  -->
					<AttributeButton
						class="bg-blue-500"
						v-model="attributes"
						effect="remove-background"
						>Remove Background</AttributeButton
					>
					<AttributeButton
						class="bg-green-500"
						v-model="attributes"
						effect="grayscale"
						>Grayscale</AttributeButton
					>
					<AttributeButton
						class="bg-blue-500"
						v-model="attributes"
						effect="pixelate"
						>Pixelate</AttributeButton
					>
				</section>
			</section>
			<section class="flex w-full">
				<section
					v-if="$route.query.photo"
					class="w-full flex justify-center">
					<CldImage v-bind="attributes.effect" />
				</section>
			</section>
		</div>
		<button
			@click="$router.push({ path: '/' })"
			class="bg-green-400 text-white rounded p-2 w-3/5 mt-4 hover:bg-green-900">
			Back
		</button>
	</div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
	h1,
	h2 {
		color: #fafafa;
	}
	button {
		color: #fafafa;
	}
}
</style>
