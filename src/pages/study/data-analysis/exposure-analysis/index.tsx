import { BranchEnum } from '@/common/study';
import { getPieConfig, PieCharts } from '@/components/charts/pie-charts';
import Gap from '@/components/gap';
import { CardBlock } from '@/packages/@cyberutopian/components';
import { useCyberFetch } from '@/request';

const ExposureAnalysis = () => {
  const { data } = useCyberFetch({ url: '/api/study/exposure', method: 'get' });

  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.result &&
        Object.keys(data?.result).map((v) => (
          <CardBlock className="px-[24px] py-[16px]" title={BranchEnum[v]}>
            <Gap />
            <PieCharts
              config={getPieConfig({
                data: data?.result[v],
                legend: {
                  offsetX: -10,
                },
              })}
            />
          </CardBlock>
        ))}
    </div>
  );
};

export default ExposureAnalysis;
