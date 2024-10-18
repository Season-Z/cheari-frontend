import PasswordInput from '@/components/password-input';
import { checkPassword } from '@/utils';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';

const Organization: FC<{ handleRegister: (data: any) => void }> = ({ handleRegister }) => {
  const [form] = Form.useForm();

  const register = async () => {
    const values = await form.validateFields();
    return handleRegister(values);
  };

  return (
    <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} layout="horizontal">
      <Form.Item label="单位名称" name="userCompany" rules={[{ required: true, message: '请输入单位名称' }]}>
        <Input placeholder="请输入单位名称" />
      </Form.Item>
      <Form.Item label="用户名" name="userUsername" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item label="手机号" name="userPhone" rules={[{ required: true, message: '请输入手机号' }]}>
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
        name="userPassword"
        validateFirst
        label="密码"
        rules={[
          { required: true, message: '请输入密码' },
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
        <PasswordInput placeholder="请输入密码" />
      </Form.Item>
      <Form.Item colon={false} className="text-right" label=" ">
        <Button size="large" className="mr-[24px]" onClick={() => history.back()}>
          返回
        </Button>
        <Button size="large" type="primary" onClick={register}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Organization;
