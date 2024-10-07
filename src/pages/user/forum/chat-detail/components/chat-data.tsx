import { Avatar } from 'antd';
import { FC } from 'react';

const ChatData: FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className + ' flex flex-col gap-4'}>
      <div className="flex items-start gap-2">
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <div
          className="text-14 p-2 bg-fill-3 w-1/2 break-all radius-8"
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit`,
          }}
        />
        <div className="flex-1" />
      </div>

      <div className="flex items-start gap-2 ">
        <div className="flex-1" />
        <div
          className="text-14 p-2 bg-fill-3 w-1/2 break-all radius-8"
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit`,
          }}
        />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      </div>
      <div className="flex items-start gap-2 ">
        <div className="flex-1" />
        <div
          className="text-14 p-2 bg-fill-3 w-1/2 break-all radius-8"
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit`,
          }}
        />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      </div>
      <div className="flex items-start gap-2 ">
        <div className="flex-1" />
        <div
          className="text-14 p-2 bg-fill-3 w-1/2 break-all radius-8"
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit`,
          }}
        />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      </div>
      <div className="flex items-start gap-2 ">
        <div className="flex-1" />
        <div
          className="text-14 p-2 bg-fill-3 w-1/2 break-all radius-8"
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
          sit`,
          }}
        />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      </div>
    </div>
  );
};

export default ChatData;
