import { Button } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';

const First: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({ setCurrent }) => {
  const handleUpload = () => {
    setCurrent(1);
  };

  return (
    <div className="flex-1">
      <img src="/images/p2.png" className="w-full h-[150px]" />
      <div className="pt-8 text-center">
        <Button type="primary" onClick={handleUpload}>
          点击上传
        </Button>
        <p className="text-error-hover">3D打印文件格式：STL、OBJ</p>
        <p className="text-error-hover">如无需3D打印，也可以仅上传3D打印方案及图片等</p>
      </div>
    </div>
  );
};

export default First;
