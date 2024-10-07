import { AudioOutlined, CameraOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { List, Modal, Switch } from 'antd';
import { FC } from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const getData = () => {
  const Action = <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />;
  return [
    {
      title: '位置',
      icon: <EnvironmentOutlined />,
      actions: [Action],
    },
    {
      title: '摄像头',
      icon: <CameraOutlined />,
      actions: [Action],
    },
    {
      title: '麦克风',
      icon: <AudioOutlined />,
      actions: [Action],
    },
  ];
};

const PrivacySettingsModal: FC<{ visible: boolean; onClose?: () => void }> = ({ visible, onClose }) => {
  const data = getData();

  return (
    <Modal
      width={621}
      open={visible}
      title="隐私设置"
      onCancel={onClose}
      cancelText="取消"
      okText="确定"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      maskClosable={false}
    >
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} avatar={item.icon} />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default PrivacySettingsModal;
