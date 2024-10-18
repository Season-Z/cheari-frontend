import { cyberFetch, useCyberFetch } from '@/request';
import { Button, Input, message, Modal, Space, Tag } from 'antd';
import { FC, useState } from 'react';

const KeywordModal: FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [value, setValue] = useState<string>();

  const { data, sendRequest } = useCyberFetch({ url: '/api/study/keyword' });

  const handleCreate = async () => {
    const result = await cyberFetch({ url: '/api/study/keyword', data: { name: value }, method: 'post' });
    if (result.success) {
      setValue(undefined);
      message.success('操作成功');
      sendRequest();
    }
  };

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
        <Button type="primary" onClick={handleCreate}>
          创建
        </Button>
      </Space.Compact>

      <div className="mt-4 p-3 border-dashed border border-[#eee]">
        {data?.result?.map((v) => (
          <Tag color="magenta" key={v.keywordId}>
            {v.keywordText}
          </Tag>
        ))}
      </div>
    </Modal>
  ) : null;
};

export default KeywordModal;
