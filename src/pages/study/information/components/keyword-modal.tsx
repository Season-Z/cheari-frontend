import { Button, Input, Modal, Space, Tag } from 'antd';
import { FC, useState } from 'react';

const KeywordModal: FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [value, setValue] = useState<string>();

  return visible ? (
    <Modal
      width={480}
      title="关键字设置"
      okText="确认"
      cancelText="取消"
      open={visible}
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      onCancel={() => onClose()}
    >
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="请输入关键词" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type="primary">创建</Button>
      </Space.Compact>

      <div className="mt-4 p-3 border-dashed border border-[#eee]">
        <Tag color="magenta">标签</Tag>
      </div>
    </Modal>
  ) : null;
};

export default KeywordModal;
