import { PhotoGallery } from "@/components/PhotoGallery";

// Replace these with your actual Cloudinary image public IDs
const photos = [
  { src: "zbabbitt/travel/ShipsAtSantorini", alt: "Ships at Santorini" },
  { src: "zababbit/space/eclipse", alt: "Eclipse" },
  { src: "zbabbitt/travel/SouthAfricaHummingBird", alt: "South African Humming Bird" },
  // Add more photos here after uploading to Cloudinary
];

export const metadata = {
  title: "Photography | Zach Babbitt",
  description: "A collection of my photography work.",
};

export default function Photography() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Photography
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
        A collection of moments I've captured. Each photo tells a story.
      </p>

      <PhotoGallery photos={photos} />

      {photos.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p>Photos coming soon...</p>
        </div>
      )}
    </div>
  );
}
