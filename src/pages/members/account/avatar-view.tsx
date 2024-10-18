import { useGlobalContext } from '@/providers/global';
import { UploadOutlined } from '@ant-design/icons';
import { Button, GetProp, message, Upload, UploadProps } from 'antd';
import { FC, useState } from 'react';
import useStyles from './index.style';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getAvatarURL = () => {
  // if (currentUser) {
  //   if (currentUser.avatar) {
  //     return currentUser.avatar;
  //   }
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
  return url;
  // }
  // return '';
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AvatarView: FC<{ uploadSuccess: (path: string) => void }> = ({ uploadSuccess }) => {
  const { user } = useGlobalContext();
  const { styles } = useStyles();

  const [imageUrl, setImageUrl] = useState<string>(`http://localhost:3280/${user.userAvatar}`);

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      console.log(info);

      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });

      if (info.file.response.success) {
        uploadSuccess(info.file.response.result.filename);
      }
    }
  };

  return (
    <>
      <div className={styles.avatar_title}>头像</div>
      <div className={styles.avatar}>
        <img src={imageUrl} alt="avatar" />
      </div>
      <Upload
        showUploadList={false}
        action="http://localhost:3280/upload/image"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
  );
};

export default AvatarView;
