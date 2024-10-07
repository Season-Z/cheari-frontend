import Gap from '@/components/gap';
import { BellOutlined } from '@ant-design/icons';
import { Checkbox, Modal, Switch } from 'antd';
import { FC, useState } from 'react';

const NotifyModal: FC<{ visible: boolean; onClose?: () => void }> = ({ visible, onClose }) => {
  const [notifyChecked, setNotifyChecked] = useState(true);
  const [lockChecked, setLockChecked] = useState(true);
  const [videoChecked, setVideoChecked] = useState(true);

  return visible ? (
    <Modal
      width={621}
      open={visible}
      title="通知设置"
      onCancel={onClose}
      cancelText="取消"
      okText="确定"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      maskClosable={false}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BellOutlined className="title-30" />
          <div>
            <div className="text-14">通知</div>
            <div className="text-text-2 text-12">获取来自应用和其他发送者的通知</div>
          </div>
        </div>
        <Switch checked={notifyChecked} onChange={(v) => setNotifyChecked(v)} />
      </div>

      <Gap />
      <Checkbox checked={lockChecked} onChange={(e) => setLockChecked(e.target.value)}>
        在锁屏页面上显示通知
      </Checkbox>
      <Gap />
      <Checkbox checked={videoChecked} onChange={(e) => setVideoChecked(e.target.value)}>
        允许通知播放声音
      </Checkbox>
    </Modal>
  ) : null;
};

export default NotifyModal;
