import PasswordInput from '@/components/password-input';
// import { useGlobalContext } from '@/providers/global';
// import { useCyberFetch } from '@/service';
import { checkPassword } from '@/utils';
import { Alert, Form, Modal } from 'antd';
// import JSEncrypt from 'jsencrypt/lib/index.js';
import { FC, useEffect } from 'react';

export interface Props {
  visible: boolean;
  onClose?: () => void;
  isFirstLogin?: boolean;
  onSuccess?: () => void;
}

const ModifyPasswordModal: FC<Props> = ({ visible, onClose, isFirstLogin = false, onSuccess }) => {
  const [form] = Form.useForm();

  // const { data: rsaPublicKey } = useCyberFetch['GET/api/v1/common/public-key']({});
  // const { sendRequest, loading } = useCyberFetch['PUT/api/v1/users/password']({}, { manual: true });

  // const { user } = useGlobalContext();

  const handleSubmit = () => {
    // form.validateFields().then(async (values) => {
    //   const sign = new JSEncrypt();
    //   sign.setPublicKey(rsaPublicKey as string);
    //   Object.keys(values).map((key) => {
    //     values[key] = sign.encrypt(values[key]) as string;
    //   });
    //   const { code } = await sendRequest(values);
    //   if (code === '200') {
    //     onSuccess?.();
    //   }
    // });
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
        {/* <Form.Item label="用户名">{user?.username}</Form.Item> */}
        <Form.Item label="用户名">username</Form.Item>
        <Form.Item
          name="password"
          validateFirst
          dependencies={['oldPassword']}
          label="新密码"
          rules={[
            { required: true, message: '请输入新的密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!checkPassword(value)) {
                  return Promise.reject(new Error('密码格式错误'));
                }
                // if (getFieldValue('oldPassword') === value) {
                //   return Promise.reject(new Error('新密码和旧密码不可以相同'));
                // }
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
          dependencies={['password']}
          label="新密码确认"
          rules={[
            { required: true, message: '请再次输入新的密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue('password') === value) {
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
