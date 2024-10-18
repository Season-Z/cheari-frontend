import UploadFile from '@/components/upload/upload-file';
import UploadImg from '@/components/upload/upload-img';
import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { cyberFetch } from '@/request';
import { Button, Form, Input, message, Radio } from 'antd';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrintStepType } from '../type';

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 14 },
};

const Second = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [value, setValue] = useState<string>();
  const [_, setState] = useRouterState<PrintStepType>();

  const onFinish = async () => {
    const values = await form.validateFields();
    const data = { ...values, orderFileContent: value };
    setState((v) => ({ ...v, current: 2, data }));
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();
    const result = await cyberFetch({
      url: '/api/print/order/save',
      method: 'post',
      data: { ...values, orderStatus: 0, orderFileContent: value },
    });

    if (result.success) {
      navigate('/print/print-cases', { replace: true });
      message.success('创建成功');
    }
  };

  const uploadImgSuccess = (path) => {
    form.setFieldValue('orderFileImage', path);
  };

  const uploadFileSuccess = (path) => {
    form.setFieldValue('orderFileModel', path);
  };

  return (
    <Fragment>
      <div className="pt-10 flex items-start gap-8">
        <UploadImg uploadSuccess={uploadImgSuccess} />
        <Input.TextArea
          value={value}
          className="ml-4"
          onChange={(e) => setValue(e.target.value)}
          placeholder="描述文案"
          rows={8}
        />
      </div>

      <Form name="validate_other" className="mt-8" form={form} {...formItemLayout}>
        <Form.Item name="orderFileImage" />

        <Form.Item name="orderFileModel" label="附件" valuePropName="fileList" extra="3D打印文件格式：STL、OBJ">
          <UploadFile uploadSuccess={uploadFileSuccess} />
        </Form.Item>
        <Form.Item name="orderFlagPublic" label="公开">
          <Radio.Group>
            <Radio value={0}>是</Radio>
            <Radio value={1}>否</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="orderFlagPrint" label="是否打印" extra="如无需3D打印，也可以仅上传3D打印方案及图片等">
          <Radio.Group>
            <Radio value={0}>是</Radio>
            <Radio value={1}>否</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <div className="text-center">
        <Button type="primary" className="mr-[12px]" onClick={handleSubmit}>
          创建
        </Button>
        <Button onClick={onFinish}>去支付</Button>
      </div>
    </Fragment>
  );
};

export default Second;
