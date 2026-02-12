import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getPhotosFromFolder(folder: string) {
  try {
    const result = await cloudinary.search
      .expression(`folder=${folder}*`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    return result.resources.map((resource: { public_id: string; context?: { custom?: { alt?: string } } }) => ({
      src: resource.public_id,
      alt: resource.context?.custom?.alt || resource.public_id.split('/').pop() || 'Photo',
    }));
  } catch (error) {
    console.error('Error fetching photos from Cloudinary:', error);
    return [];
  }
}
