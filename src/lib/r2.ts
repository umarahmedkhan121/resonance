import { put } from "@vercel/blob";

type UploadAudioOptions = {
  buffer: Buffer;
  key: string;
  contentType?: string;
};

export async function uploadAudio({
  buffer,
  key,
  contentType = "audio/wav",
}: UploadAudioOptions): Promise<void> {
  // We use the 'key' as the path in Vercel Blob
  await put(key, buffer, {
    access: "public",
    contentType: contentType,
    addRandomSuffix: false, // This keeps your file names exactly as you set them
  });
}

// If your app uses a getDownloadUrl function elsewhere, 
// Vercel Blob URLs are usually public, so you can just return the URL directly.