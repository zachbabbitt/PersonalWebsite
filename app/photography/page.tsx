import { PhotoGallery } from "@/components/PhotoGallery";
import { getPhotosFromFolder } from "@/lib/cloudinary";

export const metadata = {
  title: "Photography | Zach Babbitt",
  description: "A collection of my photography work.",
};

// Revalidate every hour (or on-demand with webhook)
export const revalidate = 3600;

export default async function Photography() {
  // Fetch all photos from the "zbabbitt" folder and subfolders
  const photos = await getPhotosFromFolder("zbabbittPhotography");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Photography
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
        A collection of moments I've captured. Each photo tells a story.
      </p>

      {photos.length > 0 ? (
        <PhotoGallery photos={photos} />
      ) : (
        <div className="text-center py-16 text-zinc-500">
          <p>Photos coming soon...</p>
        </div>
      )}
    </div>
  );
}
