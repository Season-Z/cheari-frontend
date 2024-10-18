import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { GetProp, message, Upload, UploadProps } from 'antd';
import { FC, useEffect, useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 4;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UploadImg: FC<{
  className?: string;
  title?: string;
  initialValue?: string;
  uploadSuccess: (path: string) => void;
}> = ({ title, initialValue, uploadSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    setImageUrl(initialValue || '');
  }, [initialValue]);

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });

      if (info.file.response.success) {
        uploadSuccess(info.file.response.result.filename);
      }
    }
  };

  const uploadButton = (
    <button className="w-[200px] h-[200px]" style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{title || '上传图片'}</div>
    </button>
  );

  return (
    <Upload
      name="file"
      className="upload-img"
      listType="picture-card"
      showUploadList={false}
      action="http://localhost:3280/upload/image"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" className="w-[200px] h-[200px]" /> : uploadButton}
    </Upload>
  );
};

export default UploadImg;
