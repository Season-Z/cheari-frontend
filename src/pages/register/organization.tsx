import PasswordInput from '@/components/password-input';
import { checkPassword } from '@/utils';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';

type SizeType = Parameters<typeof Form>[0]['size'];

const Organization = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Form.Item label="单位名称">
        <Input placeholder="请输入单位名称" />
      </Form.Item>
      <Form.Item label="联系人">
        <Input placeholder="请输入联系人" />
      </Form.Item>
      <Form.Item label="手机号">
        <Input placeholder="请输入手机号" />
      </Form.Item>
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
      <Form.Item colon={false} className="text-right" label=" ">
        <Button size="large" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Organization;
