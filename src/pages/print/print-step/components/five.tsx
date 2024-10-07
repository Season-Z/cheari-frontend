import { Card } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';

const Five: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({ setCurrent }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <Card
          hoverable
          title="免费打磨"
          className="w-[300px]"
          actions={[<div onClick={() => setCurrent(5)}>选择</div>]}
        >
          <p>单件价格</p>
          <div className="text-error-hover">0元</div>
        </Card>
        <Card hoverable title="喷砂" className="w-[300px]" actions={[<div onClick={() => setCurrent(5)}>选择</div>]}>
          <p>单件价格</p>
          <div className="text-error-hover">300元</div>
        </Card>
        <Card hoverable title="电镀" className="w-[300px]" actions={[<div onClick={() => setCurrent(5)}>选择</div>]}>
          <p>单件价格</p>
          <div className="text-error-hover">300元</div>
        </Card>
        <Card
          hoverable
          title="单色喷漆"
          className="w-[300px]"
          actions={[<div onClick={() => setCurrent(5)}>选择</div>]}
        >
          <p>单件价格</p>
          <div className="text-error-hover">150元</div>
        </Card>
        <Card
          hoverable
          title="双色喷漆"
          className="w-[300px]"
          actions={[<div onClick={() => setCurrent(5)}>选择</div>]}
        >
          <p>单件价格</p>
          <div className="text-error-hover">300元</div>
        </Card>
        <Card
          hoverable
          title="三色喷漆"
          className="w-[300px]"
          actions={[<div onClick={() => setCurrent(5)}>选择</div>]}
        >
          <p>单件价格</p>
          <div className="text-error-hover">450元</div>
        </Card>
      </div>
    </div>
  );
};

export default Five;
