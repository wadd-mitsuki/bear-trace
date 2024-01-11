import React, { FC } from 'react';
import { Clip } from 'src/entity/clip';

import { ClipLayout } from '@/components/ui/layout/ClipLayout';
import { ClipTitleText } from '@/components/ui/sidebar';

export type SideBarContentsPropsType = {
  clips: Clip[];
  onSelectClip: (clipId: number) => void;
};

export const SideBarContents: FC<SideBarContentsPropsType> = ({
  clips,
  onSelectClip,
}) => {
  return (
    <div className="mt-20">
      {clips.map((clip) => {
        return (
          <>
            <ClipLayout key={clip.id} onClick={() => onSelectClip(clip.id)}>
              <ClipTitleText>{clip.title}</ClipTitleText>

              {/* TODO:どうやってUI化するか悩み中 */}
              <p className="truncate w-full">{clip.text}</p>
              <p className="text-xs mt-5 mb-3">{clip.createdAt}</p>
            </ClipLayout>
          </>
        );
      })}
    </div>
  );
};
