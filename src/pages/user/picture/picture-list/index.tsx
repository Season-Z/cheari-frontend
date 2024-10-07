import { EnhanceSearchInput } from '@/components/form-field';
import { CardBlock } from '@cyberutopian/components';
import { Button, Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateImg from './components/create-img';

const PictureList = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const router = useNavigate();

  const handleSearch = () => {};

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
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
          onClick={() => router('/user/picture/detail')}
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
          onClick={() => router('/user/picture/detail')}
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
          onClick={() => router('/user/picture/detail')}
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              className="p-2"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          }
          size="small"
          onClick={() => router('/user/picture/detail')}
        >
          <Card.Meta title="中国家用电器研究院" />
        </Card>
      </div>
    </CardBlock>
  );
};

export default PictureList;
