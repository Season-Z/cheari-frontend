import { useRouterState } from '@/packages/@cyberutopian/hooks';
import { Button, InputNumber } from 'antd';
import { Fragment, useMemo } from 'react';
import { PrintStepType } from '../type';

const Three = () => {
  const [state, setState] = useRouterState<PrintStepType>();

  const t = useMemo(() => {
    if (state?.data?.orderModelLong && state?.data?.orderModelWidth && state?.data?.orderModelHeight) {
      return (
        parseInt(state?.data?.orderModelLong) *
        parseInt(state?.data?.orderModelWidth) *
        parseInt(state?.data?.orderModelHeight)
      );
    }
    return null;
  }, [state?.data?.orderModelLong, state?.data?.orderModelWidth, state?.data?.orderModelHeight]);

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
              <InputNumber
                onChange={(v) => setState((i) => ({ ...i, data: { ...i.data, orderModelLong: v.toString() } }))}
                addonAfter="cm"
              />
            </div>
            <div>
              <label>宽度：</label>
              <InputNumber
                onChange={(v) => setState((i) => ({ ...i, data: { ...i.data, orderModelWidth: v.toString() } }))}
                addonAfter="cm"
              />
            </div>
            <div>
              <label>高度：</label>
              <InputNumber
                onChange={(v) => setState((i) => ({ ...i, data: { ...i.data, orderModelHeight: v.toString() } }))}
                addonAfter="cm"
              />
            </div>
            <div>
              <label>体积：</label>
              <span>{t}cm</span>
            </div>
          </div>
        </div>

        <div className="">asdsad</div>
      </div>
      <div className="flex gap-3 mt-6">
        <Button>重新上传</Button>
        <Button type="primary" onClick={() => setState((v) => ({ ...v, current: 3 }))}>
          下一步
        </Button>
      </div>
    </Fragment>
  );
};

export default Three;
