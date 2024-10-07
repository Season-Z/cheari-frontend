import { Avatar, List } from 'antd';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const ReplyList = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<div>李磊</div>}
            description={
              <div className="flex justify-between items-center">
                <div>回复了你的信息</div>
                <div>2023-09-12</div>
              </div>
            }
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ReplyList;
