import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, UploadProps } from 'antd';
import { FC } from 'react';

const UploadFile: FC<{ uploadSuccess: (path: string) => void; accept?: string }> = ({ accept, uploadSuccess }) => {
  const props: UploadProps = {
    name: 'file',
    action: 'http://localhost:3280/upload/file',
    accept: accept || '.stl,.obj,.STL,.OBJ',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        if (info.file.response.success) {
          uploadSuccess(info.file.response.result.filename);
        }
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>点击上传</Button>
    </Upload>
  );
};

export default UploadFile;
