import type { TagItem } from '@/components/ui/Tags';

import { DisplayImage } from '@/components/ui/DisplayImage';
import { EventDetailCard } from '@/components/ui/EventDetailCard';

type Props = {
  image_url: string;
  title: string;
  detail: string;
  tags: TagItem[];
};

export const EventContent: React.FC<Props> = ({
  image_url,
  title,
  detail,
  tags,
}) => (
  <div className="grid gap-4">
    <div>
      <DisplayImage image_url={image_url} />
    </div>
    <div>
      <EventDetailCard
        title={title}
        detail={detail}
        tags={tags.map((tag) => tag.label)}
      />
    </div>
  </div>
);
