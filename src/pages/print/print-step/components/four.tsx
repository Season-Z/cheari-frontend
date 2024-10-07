import { Card, Space } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';

const Four: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({ setCurrent }) => {
  return (
    <div>
      <Space size={16}>
        <Card hoverable title="SLA" className="w-[300px]" actions={[<div onClick={() => setCurrent(4)}>选择</div>]}>
          <p>树脂光固化成型</p>
        </Card>
        <Card hoverable title="SLS" className="w-[300px]" actions={[<div onClick={() => setCurrent(4)}>选择</div>]}>
          <p>激光烧结成型</p>
        </Card>
        <Card hoverable title="SLA" className="w-[300px]" actions={[<div onClick={() => setCurrent(4)}>选择</div>]}>
          <p>惠普尼龙多流射融成型</p>
        </Card>
        <Card hoverable title="SLA" className="w-[300px]" actions={[<div onClick={() => setCurrent(4)}>选择</div>]}>
          <p>热塑性拆料熔融成型</p>
        </Card>
        <Card hoverable title="SLA" className="w-[300px]" actions={[<div onClick={() => setCurrent(4)}>选择</div>]}>
          <p>金属激光烧结成型</p>
        </Card>
      </Space>
    </div>
  );
};

export default Four;
