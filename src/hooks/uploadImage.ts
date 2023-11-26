import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';

import { storage } from './firebase/firebase';

import type { UploadResult } from 'firebase/storage';

// 画像をfirebase storageにアップロードする関数
export const uploadImage = async (
  eventId: string,
  file: File
): Promise<UploadResult> => {
  const fileRef = file.name;

  const storageRef = ref(storage, `images/${fileRef}`);
  const metadata = {
    customMetadata: {
      eventId: eventId,
    },
  };

  return uploadBytes(storageRef, file, metadata);
};

// アプロードした画像のURLを取得する関数
export const getImageUrl = async (eventId: string): Promise<string | null> => {
  try {
    const directoryRef = ref(storage, 'images');
    const fileList = await listAll(directoryRef);

    let targetFile = null;

    for (const item of fileList.items) {
      const itemMetadata = await getMetadata(item);

      // ファイルごとのメタデータから特定の条件に合致するものを探す
      if (
        itemMetadata &&
        itemMetadata.customMetadata &&
        itemMetadata.customMetadata[eventId] === eventId
      ) {
        targetFile = item;
        break; // 見つかったらループを終了
      }
    }

    if (targetFile) {
      // ファイルが見つかったらそのURLを取得して返す
      return getDownloadURL(targetFile);
    } else {
      console.log('条件に合致するファイルが見つかりませんでした');
      return null;
    }
  } catch (error) {
    console.error('画像URLを取得出来ませんでした: ', error);
    return null;
  }
};
