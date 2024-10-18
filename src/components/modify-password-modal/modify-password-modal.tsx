import PasswordInput from '@/components/password-input';
import { useGlobalContext } from '@/providers/global';
import { cyberFetch } from '@/request';
// import { useGlobalContext } from '@/providers/global';
// import { useCyberFetch } from '@/service';
import { checkPassword } from '@/utils';
import { Alert, Form, Input, Modal } from 'antd';
// import JSEncrypt from 'jsencrypt/lib/index.js';
import { FC, useEffect } from 'react';

export interface Props {
  visible: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}

const ModifyPasswordModal: FC<Props> = ({ visible, onClose, onSuccess }) => {
  const [form] = Form.useForm();

  const { user } = useGlobalContext();

  const handleSubmit = () => {
    form.validateFields().then(async (values) => {
      // const sign = new JSEncrypt();
      // sign.setPublicKey(rsaPublicKey as string);
      // Object.keys(values).map((key) => {
      //   values[key] = sign.encrypt(values[key]) as string;
      // });
      const { confirmPassword, ...rest } = values;
      const result = await cyberFetch({
        url: '/api/user/resetPassword',
        method: 'post',
        data: { ...rest, userUsername: rest.userUsername || user?.userUsername },
      });
      if (result.success) {
        onSuccess?.();
      }
    });
  };

  useEffect(() => {
    if (!visible) {
      form.resetFields();
    }
  }, [visible]);

  return (
    <Modal
      width={621}
      open={visible}
      title="修改密码"
      onCancel={onClose}
      onOk={handleSubmit}
      // confirmLoading={loading}
      cancelText="取消"
      okText="确定"
      maskClosable={false}
    >
      <Alert
        showIcon
        type="warning"
        // eslint-disable-next-line no-useless-escape
        message={`必须6～64位字符，且含字母大小写、数字、特殊字符()~!@#$%^&*_-+|{}\[]:;'<>,.?/`}
        className="mb-6"
      />
      <Form form={form} labelCol={{ span: 5 }}>
        {user?.userUsername ? (
          <Form.Item label="用户名">{user?.userUsername}</Form.Item>
        ) : (
          <Form.Item label="用户名" name="userUsername" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
        )}
        <Form.Item
          name="userPassword"
          validateFirst
          dependencies={['oldPassword']}
          label="新密码"
          rules={[
            { required: true, message: '请输入新的密码' },
            () => ({
              validator(_, value) {
                if (!checkPassword(value)) {
                  return Promise.reject(new Error('密码格式错误'));
                }

                return Promise.resolve();
              },
            }),
          ]}
        >
          <PasswordInput placeholder="请输入新的密码" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          validateFirst
          dependencies={['userPassword']}
          label="新密码确认"
          rules={[
            { required: true, message: '请再次输入新的密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue('userPassword') === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error('两次输入的密码不一致'));
                }
              },
            }),
          ]}
        >
          <PasswordInput placeholder="请再次输入新的密码" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModifyPasswordModal;
