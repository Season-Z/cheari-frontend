import { CardBlock } from '@cyberutopian/components';
import { Button } from 'antd';

const OrderDetail = () => {
  return (
    <div className="h-full">
      <CardBlock>
        <div className="grid grid-cols-6 border-b border-solid border-text-2 pb-4 p-2">
          <div>3D文件显示</div>
          <div>打印信息</div>
          <div>发货周期</div>
          <div>单价</div>
          <div>数量</div>
          <div>总价</div>
        </div>

        <div className="grid grid-cols-6 pt-2">
          <div>3D文件显示</div>
          <div>
            <div>宽度：6.0 cm</div>

            <div>高度：6.0 cm</div>

            <div>体积：6.0 cm²</div>

            <div>材料：SLM</div>

            <div>处理：三色喷漆</div>

            <div>颜色：红10、黄6、蓝19</div>
          </div>
          <div>1-5个工作日</div>
          <div>450.00</div>
          <div>1</div>
          <div>880</div>
        </div>
      </CardBlock>

      <div className="flex justify-center gap-4 mt-10">
        <Button>删除</Button>
      </div>
    </div>
  );
};

export default OrderDetail;
