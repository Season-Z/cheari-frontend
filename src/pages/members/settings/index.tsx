import useClearLoginSate from '@/hooks/useClearLoginSate';
import Icon from '@/icon';
import { useRootContext } from '@/layout/context';
import { LockOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { CardBlock } from '@cyberutopian/components';
import { Avatar, Button } from 'antd';
import { useState } from 'react';
import NotifyModal from './components/notify';
import PrivacySettingsModal from './components/privacy-settings';

const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [privateVisible, setPrivateVisible] = useState(false);
  const loginClear = useClearLoginSate();
  const { setPasswordModalVisible } = useRootContext();

  return (
    <CardBlock className="h-full">
      <div className="w-full h-full flex items-center px-40">
        <div className="w-full">
          <div
            className="w-full flex justify-between items-center bg-[#eae9e9] px-4 py-3 radius-8 cursor-pointer"
            onClick={() => setPasswordModalVisible(true)}
          >
            <Avatar size={32} icon={<UserOutlined />} />
            <div className="flex-1 ml-4 title-18">账号与安全</div>
            <Icon type="icon-right-outlined" className="title-18" />
          </div>

          <div
            className="w-full flex justify-between items-center bg-[#eae9e9] px-4 py-3 radius-8 my-4 cursor-pointer"
            onClick={() => setVisible(true)}
          >
            <Avatar size={32} icon={<SettingOutlined />} />
            <div className="flex-1 ml-4 title-18">通知设置</div>
            <Icon type="icon-right-outlined" className="title-18" />
          </div>

          <div
            className="w-full flex justify-between items-center bg-[#eae9e9] px-4 py-3 radius-8 cursor-pointer"
            onClick={() => setPrivateVisible(true)}
          >
            <Avatar size={32} icon={<LockOutlined />} />
            <div className="flex-1 ml-4 title-18">隐私设置</div>
            <Icon type="icon-right-outlined" className="title-18" />
          </div>
          <div className="w-full mt-8 flex justify-center gap-4">
            <Button onClick={() => loginClear.handleClear()}>切换账号</Button>
            <Button onClick={() => loginClear.handleClear()}>退出登录</Button>
          </div>
        </div>
      </div>
      {visible ? <NotifyModal visible={visible} onClose={() => setVisible(false)} /> : null}
      {privateVisible ? (
        <PrivacySettingsModal visible={privateVisible} onClose={() => setPrivateVisible(false)} />
      ) : null}
    </CardBlock>
  );
};

export default Settings;
