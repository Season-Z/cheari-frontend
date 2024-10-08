import UploadImg from '@/components/upload/upload-img';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { ProForm, ProFormRadio, ProFormUploadButton } from '@ant-design/pro-components';
import { Dropdown, Input, MenuProps } from 'antd';
import { useState } from 'react';
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
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();

  const onFinish = async (values: Record<string, any>) => {
    console.log('values', values);
  };

  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  return (
    <CardBlock className="h-full">
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

      <ProForm
        style={{
          marginTop: 50,
          maxWidth: 600,
        }}
        name="basic"
        layout="horizontal"
        submitter={{
          render: (props, doms) => {
            return [...doms, <Dropdown.Button menu={{ items, onClick: onMenuClick }}>操作</Dropdown.Button>];
          },
        }}
        onFinish={onFinish}
      >
        <ProFormUploadButton label="附件" name="extra" extra="如需3D打印，格式请上传：STL、OBJ" />
        <ProFormRadio.Group
          name="radio"
          label="公开"
          options={[
            {
              label: '是',
              value: '1',
            },
            {
              label: '否',
              value: '2',
            },
          ]}
        />
      </ProForm>

      {visible ? <VoteModal visible={visible} onClose={() => setVisible(false)} /> : null}
    </CardBlock>
  );
};

export default CaseDetail;
