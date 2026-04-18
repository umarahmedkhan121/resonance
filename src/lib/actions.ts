import { put, del } from "@vercel/blob";

type UploadAudioOptions = {
  buffer: Buffer;
  key: string; 
  contentType?: string;
};

/**
 * Uploads audio to Vercel Blob.
 * IMPORTANT: I changed 'Promise<void>' to 'Promise<string>' 
 * because you MUST return the URL to save it in your database.
 */
export async function uploadAudio({
  buffer,
  key,
  contentType = "audio/wav",
}: UploadAudioOptions): Promise<string> {
  
  const blob = await put(key, buffer, {
    contentType,
    access: 'public', // This makes the file readable via its URL
  });

  return blob.url; 
}

/**
 * Deletes audio from Vercel Blob using the full URL.
 */
export async function deleteAudio(url: string): Promise<void> {
  await del(url);
}