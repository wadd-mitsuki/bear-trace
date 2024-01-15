import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import { Flex } from 'antd';
import React, { FC } from 'react';

import { ContentsPropsType } from '@/components/shared/contents';
import { useContentBody } from '@/components/shared/contents/hooks';
import {
  ClipTitleInput,
  MarkDownEditor,
  MarkdownPreview,
} from '@/components/ui/form';

export type ContentBodyPropsType = {
  isEditOption: boolean;
} & ContentsPropsType;

export const ContentBody: FC<ContentBodyPropsType> = ({
  handleSaveText,
  isEditOption,
  selectedClip,
}) => {
  const { onChangeText, onChangeTitleText, onSaveText, text, titleText } =
    useContentBody({ handleSaveText, selectedClip });

  return (
    <main className="mt-20 mx-12" onBlur={onSaveText}>
      <Flex gap="5rem">
        <div className="w-full">
          <ClipTitleInput
            value={titleText}
            onChange={(e) => onChangeTitleText(e.target.value)}
          />
          <div className="pt-5">
            <MarkDownEditor
              isEditOption={isEditOption}
              text={text}
              onChange={onChangeText}
            />
          </div>
        </div>

        {/* プレビュー画面 */}
        <MarkdownPreview text={text} title={titleText} />
      </Flex>
    </main>
  );
};