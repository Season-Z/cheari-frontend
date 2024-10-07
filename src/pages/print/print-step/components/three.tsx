import { Button, Input } from 'antd';
import { Dispatch, FC, Fragment, SetStateAction } from 'react';

const Three: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({ setCurrent }) => {
  const handleUpload = () => {
    setCurrent(1);
  };

  return (
    <Fragment>
      <div className="flex items-start gap-4">
        <div>
          <div className="flex flex-col gap-3">
            <div>
              <label>模型名称：</label>
              <span>3D耦合器</span>
            </div>
            <div>
              <label>长度：</label>
              <span>6.0cm</span>
            </div>
            <div>
              <label>宽度：</label>
              <span>6.0cm</span>
            </div>
            <div>
              <label>高度：</label>
              <span>6.0cm</span>
            </div>
            <div>
              <label>体积：</label>
              <span>6.0cm</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <div>
              <span>设置打印尺寸</span>
            </div>
            <div>
              <label>长度：</label>
              <Input defaultValue={6.0} />
            </div>
            <div>
              <label>宽度：</label>
              <Input defaultValue={6.0} />
            </div>
            <div>
              <label>高度：</label>
              <Input defaultValue={6.0} />
            </div>
            <div>
              <label>体积：</label>
              <span>6.0cm</span>
            </div>
          </div>
        </div>

        <div className="">asdsad</div>
      </div>
      <div className="flex gap-3 mt-6">
        <Button>重新上传</Button>
        <Button type="primary" onClick={() => setCurrent(3)}>
          下一步
        </Button>
      </div>
    </Fragment>
  );
};

export default Three;
