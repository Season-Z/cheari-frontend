import Contact from '@/components/contact';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';
import { Divider, List } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const InformationDetail = () => {
  const params = useParams();
  const [activeKey, setActiveKey] = useState();
  const { data } = useCyberFetch({ url: `/api/platform/info/${params.id}/book`, method: 'get' });
  const { data: article } = useCyberFetch({ url: `/api/platform/info/book/${activeKey}`, method: 'get' });

  const handleClick = (item) => {
    setActiveKey(item.bookId);
  };

  return (
    <CardBlock className="h-full">
      <div className="flex justify-end">
        <Contact />
        <Gap />
      </div>
      <div className="flex items-start gap-4 h-full">
        <List
          dataSource={data?.result || []}
          renderItem={(item: any) => (
            <List.Item className="cursor-pointer" key={item.bookId} onClick={() => handleClick(item)}>
              <span className={item.bookId === activeKey ? 'text-main-hover' : ''}>{item.bookName}</span>
            </List.Item>
          )}
        />
        <Divider type="vertical" className="h-full" />

        <div className="h-full flex-1">
          <List
            itemLayout="vertical"
            dataSource={article?.result || []}
            renderItem={(item: any) => (
              <List.Item key={item.articleId} actions={['参考文献', '相关文章', '多维度评价']}>
                <List.Item.Meta title={item.articleTitle} description={item.articleAuthor} />
                <div>{item.articleContent}</div>
                <div className="mt-[4px]">
                  {item.articleFile}（{item.articleFileSize}KB）
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </CardBlock>
  );
};

export default InformationDetail;
