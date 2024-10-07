import { Avatar, List } from 'antd';
import { useNavigate } from 'react-router-dom';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const ChatList = () => {
  const router = useNavigate();
  const clickChat = () => {
    router('/user/forum/chat-list/123');
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={<div className="text-text-2">2023-12-09</div>}
          className="cursor-pointer hover:bg-fill-2"
          onClick={() => clickChat(item)}
        >
          <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />}
            title={<a href="https://ant.design">{item.title}</a>}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ChatList;
