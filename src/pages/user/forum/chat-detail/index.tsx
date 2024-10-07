import { Avatar, Divider } from 'antd';
import ChatData from './components/chat-data';
import ChatEditor from './components/chat-editor';

const ChatDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-4">
          <Avatar size={48} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <div className="text-16 text-text-5">李磊</div>
        </div>
        <div className="title-20 pr-6">私信</div>
      </div>

      <Divider />

      <div className="flex-1">
        <ChatData className="h-[380px] overflow-y-scroll mb-4 px-2" />
        <ChatEditor />
      </div>
    </div>
  );
};

export default ChatDetail;
