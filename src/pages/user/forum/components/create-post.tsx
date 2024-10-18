import Gap from '@/components/gap';
import UploadImg from '@/components/upload/upload-img';
import WordEditor from '@/components/word-editor';
import { cyberFetch } from '@/request';
import { Button, Drawer, Input, message } from 'antd';
import { FC, useState } from 'react';

const CreatePost: FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [content, setContent] = useState<string>('');

  const [data, setData] = useState({});

  const handleSubmit = async () => {
    const result = await cyberFetch({ url: '/api/forum', method: 'post', data: { ...data, subjectContent: content } });

    if (result.success) {
      message.success('发布成功');
      onClose();
    }
  };

  const uploadImgSuccess = (path) => {
    setData((v) => ({ ...v, subjectImage: path }));
  };

  return open ? (
    <Drawer width={600} placement="right" closable={false} onClose={onClose} open={open}>
      <div className="flex justify-between items-center">
        <div className="title-18">发布新帖</div>
        <Button type="primary" onClick={handleSubmit}>
          发表
        </Button>
      </div>

      <Gap />

      <Input placeholder="请填写标题" onChange={(e) => setData((v) => ({ ...v, subjectTitle: e.target.value }))} />
      <Gap />
      <UploadImg title="封面图片" uploadSuccess={uploadImgSuccess} />
      <Gap />
      <WordEditor value={content} setValue={setContent} />
    </Drawer>
  ) : null;
};

export default CreatePost;
