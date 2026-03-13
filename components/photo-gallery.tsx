import Image from 'next/image';
import { imageUrl } from '@/lib/utils';

export function PhotoGallery({ photos }: { photos: { file_path: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {photos.slice(0, 8).map((photo) => (
        <Image key={photo.file_path} src={imageUrl(photo.file_path, 'w500')} alt="Movie still" width={500} height={300} className="aspect-video rounded-xl object-cover" />
      ))}
    </div>
  );
}
