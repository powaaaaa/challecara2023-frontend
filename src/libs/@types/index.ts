import type * as ApiTypes from '@/api/@types';

// Input
export type IsLabelDisplay = 'hidden' | 'block';

export type ButtonType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'url';

// Button
export type ButtonVariant = 'base' | 'sub' | 'inputStyle' | 'disabled';

// CustomButton
export type ButtonCustom = 'base' | 'disabled' | 'result' | 'draft';
// none

// Tags
export type SelectTagItem = {
  id: ApiTypes.Tag['uuid'];
  label: ApiTypes.Tag['name'];
  selected: boolean;
};

export type DisplayTagItem = {
  uuid: ApiTypes.Tag['uuid'];
  name: ApiTypes.Tag['name'];
};

// List
export type Result = {
  userId: string;
  transaction: string;
  result: string;
};

export type Receive = {
  userId: string;
  transaction: string;
  receive: string;
};
