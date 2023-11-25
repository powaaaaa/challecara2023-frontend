import { ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from './firebase/firebase';

import type { UploadTask } from 'firebase/storage';

export const uploadImage = async (
  fileRef: string,
  fileBuf: Blob | Uint8Array | ArrayBuffer
): Promise<UploadTask> => {
  const storageRef = ref(storage, fileRef);

  // Upload the file and metadata
  return uploadBytesResumable(storageRef, fileBuf);
};
