export type User = {
  id: string;
  display_name: string;
  password?: string;
};

export type Event = {
  id: string;
  title: string;
  image_url: string;
  administrator_id: string;
  start_time: string;
  end_time: string;
};

export type Tag = {
  uuid: string;
  name: string;
};

export type Administrator = {
  id?: User['id'];
  administrator_display_name: User['display_name'];
  password?: User['password'];
  introduction: string;
  sns_url: string;
  homepage_url: string;
};

export type Result = {
  participant_id: string;
  txid: string;
  is_winner: string;
};

export type Receipt = {
  participant_id: string;
  txid: string;
};

export type EventParticipantResponse = {
  users: User[];
  events: Event[];
  tags: Tag[];
};

export type SearchEventsResponse = {
  user: User;
  events: Event[];
  tags: Tag[];
};

export type EventResponse = {
  user: User;
  event: Event;
  administrator: Administrator;
};

export type RegisterEventPayload = {
  id: Event['id'];
  participant_id: User['id'];
};

export type ResultResponse = {
  user: User;
  results: Result[];
};

export type ReceiptResponse = {
  user: User;
  title: Event['title'];
  address: string;
};

export type ReceiptPayload = {
  id: Event['id'];
  participant_id: User['id'];
};

export type ReceiptsResponse = {
  user: User;
  receipts: Receipt[];
};

export type TagsResponse = {
  tags: Tag[];
};

export type EventAdministratorResponse = {
  user: User;
  draft_events: Event[];
  active_events: Event[];
  finished_events: Event[];
};

export type DraftEventPayload = {
  administrator_id: User['id'];
  title?: Event['title'];
  image_url: Event['image_url'];
  tags?: Tag['name'][];
  winning_number: string;
  start_time: Event['start_time'];
  end_time: Event['end_time'];
  detail: string;
  id: Event['id'];
};

export type PublishEventPayload = {
  id: Event['id'];
};

export type SignUpPayload = {
  email: string;
  password: string;
  id: string;
  display_name: string;
  age: string;
  phone_number: string;
  address: string;
  is_admin: boolean;
  introduction?: Administrator['introduction'];
  sns_url?: Administrator['sns_url'];
  homepage_url?: Administrator['homepage_url'];
};

export type SignInPayload = {
  id: User['id'];
  password: User['id'];
};

export type SignInResponse = {
  access_token: string;
};
