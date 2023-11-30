import type { ComponentPropsWithoutRef } from 'react';

import { ResultContent } from '../ResultContent';

import type * as Types from '@/api/@types';
import type { DisplayTagItem } from '@/libs/@types';

import { DisplayImage } from '@/components/ui/DisplayImage';
import { EventDetailCard } from '@/components/ui/EventDetailCard';

type Props = {
  is_received: Types.EventItem['is_received'];
  is_winner: Types.EventItem['is_winner'];
  is_active: Types.EventItem['is_active'];
  image_url: Types.EventItem['image_url'];
  title: Types.EventItem['title'];
  detail: Types.EventItem['detail'];
  tags: DisplayTagItem[];
} & ComponentPropsWithoutRef<'button'>;

/**
 *
 * @param onClick: 受領確認(handleReceiptApply)
 * @returns
 */
export const EventContent: React.FC<Props> = ({
  is_received,
  is_winner,
  is_active,
  image_url,
  title,
  detail,
  tags,
  onClick,
}) => {
  const isResultDisplay: boolean = !is_active && is_winner !== null;

  return (
    <div className="grid gap-4">
      <div style={{ display: isResultDisplay ? '' : 'none' }}>
        <ResultContent>
          <div
            className="text-main"
            style={{ display: !is_winner ? '' : 'none' }}
          >
            残念ですが……ハズレです またチャレンジしてくださいね！
          </div>
          <div
            style={{
              display: is_winner && !is_received ? '' : 'none',
            }}
          >
            <div className="text-main mb-8">
              おめでとうございます！アタリです！
              <br />
              当選品が届きましたら、以下から受け取りの申請をお願いします
            </div>
            <button
              className="underline underline-offset-2 text-accent"
              onClick={onClick}
            >
              受取申請
            </button>
          </div>
          <div
            style={{
              display: is_winner && is_received ? '' : 'none',
            }}
          >
            <div className="text-main">
              ご協力ありがとうございます
              <br />
              引き続きお楽しみください！
            </div>
          </div>
        </ResultContent>
      </div>
      <div>
        <DisplayImage image_url={image_url} />
      </div>
      <div>
        <EventDetailCard title={title} detail={detail} tags={tags} />
      </div>
    </div>
  );
};
