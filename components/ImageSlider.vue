<script setup lang="ts">
const slider = defineModel<number>();
</script>

<template>
	<section class="border-2- p-4 flex flex-col items-center w-full">
		<label
			for="default-range"
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
			<slot />
		</label>
		<input
			id="default-range"
			type="range"
			v-model.number="slider"
			class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
		<p>{{ slider }}</p>
	</section>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
	p {
		color: #fafafa;
	}
}
</style>
