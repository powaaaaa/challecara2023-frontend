import type * as Types from '@/libs/@types/api';
import type { DisplayTagItem } from '@/libs/@types/index';

type Props = {
  title: Types.EventItem['title'];
  detail: Types.EventItem['detail'];
  tags: DisplayTagItem[];
};

export const EventDetailCard: React.FC<Props> = ({ title, detail, tags }) => (
  <div className="text-black bg-basic px-8 py-10 w-[832px] rounded-lg">
    <p className="mb-4 text-xl">{title}</p>
    <span className="text-base text-black-lighten-1">
      {tags.map((tag) => (
        <span key={tag.uuid}>{tag.name}, </span>
      ))}
    </span>
    <p className="mt-12 text-xl">{detail}</p>
  </div>
);
