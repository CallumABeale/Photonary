<script setup lang="ts">
import { type Result } from '~/utils/types';
const router = useRouter();

const { data, refresh } = useFetch('/api/cloud');
const imageInfo = ref<Result | null>(null);

const goToEdit = (public_id: string) => {
	router.push(`edit?photo=${encodeURIComponent(public_id)}`);
};

const onUpload = (result: Ref<Result>) => {
	imageInfo.value = result.value;
};

const refreshPics = () => {
	refresh();
};
</script>

<template>
	<h1 class="text-4xl font-extrabold">Select Photo to Edit</h1>
	<CldUploadWidget
		v-slot="{ open }"
		:onUpload="onUpload"
		:onClose="refreshPics"
		uploadPreset="rd6ld0t9">
		<button
			class="bg-blue-400 rounded text-white p-4"
			type="button"
			@click="open">
			Upload an Image
		</button>
	</CldUploadWidget>
	<div
		class="p-4 grid grid-cols-3 grid-rows-3 gap-3 w-3/5 m-auto border-2 border-green-300 mt-4">
		<div
			v-for="picture in data?.resources"
			@click="goToEdit(picture.public_id)"
			class="cursor-pointer">
			<CldImage
				width="300"
				height="300"
				crop="thumb"
				:src="picture.public_id"
				:alt="picture.context?.alt || picture.filename" />
		</div>
	</div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
	h1 {
		color: #fafafa;
	}
	button {
		color: #fafafa;
	}
}
</style>
