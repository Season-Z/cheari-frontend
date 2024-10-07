import UploadFile from '@/components/upload/upload-file';
import UploadImg from '@/components/upload/upload-img';
import { Button, Form, Input, Radio } from 'antd';
import { Dispatch, FC, Fragment, SetStateAction, useState } from 'react';

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Second: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({ setCurrent }) => {
  const [value, setValue] = useState<string>();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setCurrent(2);
  };

  return (
    <Fragment>
      <div className="pt-10 flex items-start gap-8">
        <UploadImg />
        <Input.TextArea
          value={value}
          className="ml-4"
          onChange={(e) => setValue(e.target.value)}
          placeholder="描述文案"
          rows={8}
        />
      </div>

      <Form
        name="validate_other"
        className="mt-8"
        {...formItemLayout}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
          'color-picker': null,
        }}
      >
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="3D打印文件格式：STL、OBJ"
        >
          <UploadFile />
        </Form.Item>
        <Form.Item name="radio-group" label="公开">
          <Radio.Group>
            <Radio value="a">是</Radio>
            <Radio value="b">否</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="radio-group1" label="是否打印" extra="如无需3D打印，也可以仅上传3D打印方案及图片等">
          <Radio.Group>
            <Radio value="a">是</Radio>
            <Radio value="b">否</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <div className="text-center">
        <Button type="primary" onClick={onFinish}>
          上传
        </Button>
      </div>
    </Fragment>
  );
};

export default Second;
