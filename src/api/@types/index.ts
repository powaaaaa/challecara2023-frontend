// Items
export type AdministratorItem = {
  administrator_display_name: User['display_name'];
  introduction: User['introduction'];
  sns_url: User['sns_url'];
  homepage_url: User['homepage_url'];
};

export type EventItem = {
  id: string;
  title: string;
  image_url: string;
  administrator_id: User['id'];
  start_time: string;
  end_time: string;
  detail: string;
  tags: Tag[];
  winning_number: number;
  is_active: boolean;
  is_winner: boolean | null;
  has_applied: boolean;
  is_published: boolean;
  is_received: boolean;
};

export type EventListItem = {
  id: EventItem['id'];
  title: EventItem['title'];
  image_url: EventItem['image_url'];
  administrator_id: User['id'];
  start_time: EventItem['start_time'];
  end_time: EventItem['end_time'];
};

export type EventReceiptItem = {
  participant_id: User['id'];
  txid: string;
};

export type EventResultItem = {
  participant_id: User['id'];
  txid: string;
  is_winner: EventItem['is_winner'];
};

export type Tag = {
  uuid: string;
  name: string;
};

export type User = {
  id: string;
  email?: string;
  password?: string;
  display_name: string;
  age?: number;
  phone_number?: string;
  address?: string;
  introduction?: string;
  sns_url?: string;
  homepage_url?: string;
  created_at?: Date;
  updated_at?: Date;
};

// Responses or Requests
/**
 * GET
 * /api/events/participant
 *
 *参加者向けに利用可能な全てのイベント一覧を取得するために使用されます。
 */
export type EventParticipantResponse = {
  users: User[];
  events: EventListItem[];
  tags: Tag[];
};

/**
 * /api/events/search
 *
 * query
 */
export type SearchEventsQuery = {
  keyword: string;
  tags: Tag['name'][];
};
/**
 * GET
 * /api/events/search
 *
 *イベントをキーワードやタグを使用して絞り込み検索するために使用されます。
 */
export type SearchEventsResponse = {
  user: User;
  events: EventListItem[];
  tags: Tag[];
};

/**
 * GET
 * /api/event/{id}
 *
 *指定されたイベントの詳細情報を取得するために使用されます。idパラメータによってイベントIDを指定します。
 */
export type EventResponse = {
  user: User;
  event: EventItem;
  administrator: AdministratorItem;
};

/**
 * POST
 * /api/event
 *
 *イベントに参加するために利用されます。
 */
export type RegisterEventPayload = {
  id: EventItem['id'];
  participant_id: User['id'];
};

/**
 * GET
 * /api/event/{id}/result
 *
 *指定されたイベントの抽選結果を取得するために使用されます。idパラメータによってイベントIDを指定します。
 */
export type ResultResponse = {
  user: User;
  results: EventResultItem[];
};

/**
 * GET
 * /api/event/{id}/receipt
 *
 *指定されたイベントの参加者が受け取り確認するために使用されます。idパラメータによってイベントIDを指定します。
 */
export type ReceiptResponse = {
  user: User;
  title: EventItem['title'];
  address: User['address'];
};

/**
 * POST
 * /api/event/{id}/receipt
 *
 *指定されたイベントの参加者が景品を受け取ったことを確認するために使用されます。idパラメータによってイベントIDを指定します。
 */
export type ReceiptPayload = {
  id: EventItem['id'];
  participant_id: User['id'];
};

/**
 * GET
 * /api/event/{id}/receipts
 *
 * 指定されたイベントの受領一覧を取得するために使用されます。idパラメータによってイベントIDを指定します。
 */
export type ReceiptsResponse = {
  user: User;
  receipts: EventReceiptItem[];
};

/**
 * GET
 * /api/event/tags
 *
 * 利用可能なタグ一覧を取得するために使用されます。
 */
export type TagsResponse = {
  tags: Tag[];
};

/**
 * GET
 * /api/events/administrator
 *
 *主催者向けに利用可能な全てのイベント一覧を取得するために使用されます。
 */
export type EventAdministratorResponse = {
  user: User;
  draft_events: EventListItem[];
  active_events: EventListItem[];
  finished_events: EventListItem[];
};

/**
 * POST
 * /api/event/draft
 *
 *新しいイベントの下書きを作成するために使用されます。
 */
export type DraftEventPayload = {
  administrator_id: User['id'];
  title?: EventItem['title'];
  image_url: EventItem['image_url'];
  tags?: Tag['name'][];
  winning_number: string;
  start_time: EventItem['start_time'];
  end_time: EventItem['end_time'];
  detail: EventItem['detail'];
  id: EventItem['id'];
};

/**
 * POST
 * /api/event/publish
 *
 *下書き状態にあるイベントを公開するために使用されます。
 */
export type PublishEventPayload = {
  id: EventItem['id'];
};

/**
 * POST
 * /api/signup
 *
 *新しいアカウントを作成するために使用されます。
 */
export type SignUpPayload = {
  email: User['email'];
  password: User['password'];
  id: User['id'];
  display_name: User['display_name'];
  age: User['age'];
  phone_number: User['phone_number'];
  address: User['address'];
  is_admin: boolean;
  introduction?: User['introduction'];
  sns_url?: User['sns_url'];
  homepage_url?: User['homepage_url'];
};

/**
 * POST
 * /api/signin
 *
 *既存ユーザがアカウントにサインインするために使用されます。
 */
export type SignInPayload = {
  username: User['display_name'];
  password: User['password'];
};
/**
 * /api/signin
 *
 * response
 */
export type SignInResponse = {
  access_token: string;
};
