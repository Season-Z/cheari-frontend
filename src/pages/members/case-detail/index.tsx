import UploadFile from '@/components/upload/upload-file';
import UploadImg from '@/components/upload/upload-img';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { cyberFetch, useCyberFetch } from '@/request';
import { ProForm, ProFormRadio } from '@ant-design/pro-components';
import { Dropdown, Form, Input, MenuProps, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import VoteModal from '../person/components/vote-modal';

const items = [
  {
    key: 'print',
    label: '打印',
  },
  {
    key: 'delete',
    label: '删除',
  },
];

const CaseDetail = () => {
  const param = useSearchParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();

  const { data } = useCyberFetch({
    url: `/api/print/order/${param[0].get('orderId') || 0}`,
    method: 'get',
  });

  useEffect(() => {
    const d = data?.result;
    if (d) {
      setValue(d.orderFileContent);
      form.setFieldValue('orderFlagPublic', d.orderFlagPublic);
      form.setFieldValue('orderFileImage', d.orderFileImage);
    }
  }, [data?.result]);

  const handleSubmit = async () => {
    const { sss, ...values } = await form.validateFields();
    const result = await cyberFetch({
      url: '/api/print/order/save',
      method: 'post',
      data: { ...data?.result, ...values, orderStatus: 0, orderFileContent: value },
    });

    if (result.success) {
      navigate('/members/person', { replace: true });
      message.success('修改成功');
    }
  };

  const uploadImgSuccess = (path) => {
    form.setFieldValue('orderFileImage', path);
  };

  const uploadFileSuccess = (path) => {
    form.setFieldValue('orderFileModel', path);
  };

  const onMenuClick: MenuProps['onClick'] = async (e) => {
    if (e.key !== 'delete') {
      return;
    }
    const result = await cyberFetch({ url: `/api/print/order/${data?.result?.orderId}`, method: 'DELETE' });

    if (result.success) {
      message.success('删除成功');
      navigate('/members/person', { replace: true });
    }
  };

  return (
    <CardBlock className="h-full">
      <div className="pt-10 flex items-start gap-8">
        <UploadImg
          initialValue={`http://localhost:3280/${data?.result?.orderFileImage}`}
          uploadSuccess={uploadImgSuccess}
        />
        <Input.TextArea
          value={value}
          className="ml-4"
          onChange={(e) => setValue(e.target.value)}
          placeholder="描述文案"
          rows={8}
        />
      </div>

      <ProForm
        style={{
          marginTop: 50,
          maxWidth: 600,
        }}
        form={form}
        name="basic"
        layout="horizontal"
        submitter={{
          render: (props, doms) => {
            return [...doms, <Dropdown.Button menu={{ items, onClick: onMenuClick }}>操作</Dropdown.Button>];
          },
        }}
        onFinish={handleSubmit}
      >
        <Form.Item name="orderFileImage" />
        <Form.Item name="sss" label="附件" valuePropName="fileList" extra="3D打印文件格式：STL、OBJ">
          <UploadFile uploadSuccess={uploadFileSuccess} />
        </Form.Item>
        <ProFormRadio.Group
          name="orderFlagPublic"
          label="公开"
          options={[
            {
              label: '是',
              value: 0,
            },
            {
              label: '否',
              value: 1,
            },
          ]}
        />
      </ProForm>

      {visible ? <VoteModal visible={visible} onClose={() => setVisible(false)} /> : null}
    </CardBlock>
  );
};

export default CaseDetail;
