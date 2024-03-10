import cloudinary from 'cloudinary';
import { Result } from '~/utils/types';

export default defineEventHandler(async (event) => {
	const environmental = useRuntimeConfig(event);

	cloudinary.v2.config({
		cloud_name: environmental.public.cloudinary.cloudName,
		api_key: environmental.cloudKey,
		api_secret: environmental.cloudSecret,
	});

	const data: Result = await cloudinary.v2.search
		.with_field('context')
		.expression('resource_type:image')
		.sort_by('public_id', 'desc')
		.max_results(12)
		.execute();

	return {
		...data,
	};
});
