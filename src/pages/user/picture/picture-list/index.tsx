import { EnhanceSearchInput } from '@/components/form-field';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Button, Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateImg from './components/create-img';

const PictureList = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const router = useNavigate();
  const [title, setTitle] = useState<string>();

  const { data } = useCyberFetch({
    url: '/api/forum',
    method: 'get',
    data: { subjectType: 0, subjectTitle: title || undefined },
  });

  const handleSearch = (v) => {
    setTitle(v);
  };

  return (
    <CardBlock>
      <div className="flex justify-end items-center gap-4 mb-4">
        <Button type="primary" onClick={() => setImgOpen(true)}>
          上传图片
        </Button>
        <EnhanceSearchInput placeholder="搜索" className="w-[278px]" handleSearch={handleSearch} />
      </div>
      {imgOpen && <CreateImg open={imgOpen} onClose={() => setImgOpen(false)} />}
      <div className="grid grid-cols-3 gap-4">
        {data?.result?.map((v) => (
          <Card
            key={v.subjectId}
            hoverable
            cover={
              <img
                alt="example"
                className="w-full h-[230px]  object-contain p-2 object-contain"
                src={`http://localhost:3280/${v.subjectImage}`}
              />
            }
            size="small"
            onClick={() => router(`/user/picture/${v.subjectId}`)}
          >
            <Card.Meta title={v.subjectTitle} />
          </Card>
        ))}
      </div>
    </CardBlock>
  );
};

export default PictureList;
