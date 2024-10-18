import {
  ProForm,
  ProFormCheckbox,
  ProFormDateRangePicker,
  ProFormList,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import { FC } from 'react';

const VoteModal: FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const onFinish = async (values: Record<string, any>) => {
    console.log('values', values);
    onClose();
  };

  return visible ? (
    <Modal
      width={621}
      open={visible}
      title="发起投票"
      onCancel={onClose}
      cancelText="取消"
      okText="确定"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      maskClosable={false}
    >
      <ProForm
        style={{
          margin: 'auto',
          marginTop: 8,
          maxWidth: 600,
        }}
        name="basic"
        layout="horizontal"
        initialValues={{
          public: '1',
        }}
        onFinish={onFinish}
      >
        <ProFormDateRangePicker
          label="发起投票时间"
          width="md"
          name="date"
          rules={[
            {
              required: true,
              message: '请选择发起投票时间',
            },
          ]}
          placeholder={['开始日期', '结束日期']}
        />
        <ProFormRadio.Group
          options={[
            {
              value: '1',
              label: '每个用户只能投一次',
            },
            {
              value: '2',
              label: '每天可投一次',
            },
            {
              value: '3',
              label: '不限制',
            },
          ]}
          label="规则设置"
          name="publicType"
        />
        <ProFormList name="vote" label="投票内容">
          <ProForm.Group key="group">
            <ProFormText
              width="md"
              name="ssss"
              rules={[
                {
                  required: true,
                  message: '请输入投票内容!',
                },
              ]}
            />
          </ProForm.Group>
        </ProFormList>
        <ProFormCheckbox label="发起投票后，将公开展示方案内容及附件信息" name="huhu" />
      </ProForm>
    </Modal>
  ) : null;
};

export default VoteModal;
