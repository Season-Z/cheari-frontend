import { List } from 'antd';
import { FC } from 'react';

const ItemList: FC<{ data: any[] }> = ({ data }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data || []}
      renderItem={(item: any) => (
        <List.Item
          key={item.subjectTitle}
          extra={
            <img
              className="w-[150px] h-[150px] object-contain"
              alt="logo"
              src={`http://localhost:3280/${item.subjectImage}`}
            />
          }
        >
          <List.Item.Meta title={<a>{item.subjectTitle}</a>} />
          {/* <div dangerouslySetInnerHTML={{ __html: item.subjectContent }} /> */}
          {item.subjectContent}
        </List.Item>
      )}
    />
  );
};

export default ItemList;
