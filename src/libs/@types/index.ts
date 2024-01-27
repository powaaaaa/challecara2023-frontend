import type * as ApiTypes from '@/libs/@types/api';

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
  selected: boolean | undefined;
};

export type DisplayTagItem = {
  uuid: ApiTypes.Tag['uuid'];
  name: ApiTypes.Tag['name'];
};

// List
export type Result = {
  participant_id: string;
  txid: string;
  is_winner: string;
};

export type Receipt = {
  participant_id: string;
  txid: string;
};
