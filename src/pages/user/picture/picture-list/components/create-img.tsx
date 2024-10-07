import Gap from '@/components/gap';
import WordEditor from '@/components/word-editor';
import { Button, Drawer, Input } from 'antd';
import { FC, useState } from 'react';

const CreateImg: FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [content, setContent] = useState<string>('');

  return open ? (
    <Drawer width={600} placement="right" closable={false} onClose={onClose} open={open}>
      <div className="flex justify-between items-center">
        <div className="title-18">图片发布</div>
        <Button type="primary">发布</Button>
      </div>

      <Gap />

      <Input placeholder="请填写标题" />
      <Gap />
      <WordEditor value={content} setValue={setContent} />
    </Drawer>
  ) : null;
};

export default CreateImg;
