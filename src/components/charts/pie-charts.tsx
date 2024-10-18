import { colorsEnums, typographyEnums } from '@/specific/enums';
import { Pie, PieConfig } from '@ant-design/plots';
import { FC } from 'react';

interface PieConfigType extends Omit<PieConfig, 'angleField' | 'colorField'> {
  title?: string;
  content?: string;
}

// 饼图基本配置
export const getPieConfig = (config: PieConfigType) => {
  const { title, content, data, ...rest } = config;

  const defaultPieStyle = {
    fill: '',
  };
  if (data.every((item: any) => !item.value)) {
    defaultPieStyle.fill = '#F0F2F5';
  }

  return {
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '50%',
      content: '',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    pieStyle: {
      lineWidth: 0,
      ...defaultPieStyle,
    },
    animation: false,
    state: {
      active: {
        style: () => {
          return {
            stroke: '#fff',
            lineWidth: 3,
          };
        },
      },
      selected: {
        style: {
          // stroke: '#fff',
          // background: '#fff',
        },
      },
    },
    legend: {
      position: 'right',
      itemName: {
        style: {
          fill: colorsEnums['text-4'],
        },
      },
    },
    statistic: {
      title: {
        style: {
          color: colorsEnums['text-4'],
          ...typographyEnums['text-12'],
        },
        content: title,
      },
      content: {
        style: {
          ...typographyEnums['title-18'],
          color: colorsEnums['text-8'],
          fontFamily: 'DIN',
        },
        content: content,
      },
    },
    ...rest,
    data,
    angleField: 'value',
    colorField: 'type',
    autoFit: true,
  } as PieConfig;
};

const PieCharts: FC<{ config: PieConfig; text?: string }> = (props) => {
  const { config, text } = props;

  return (
    <>
      {text ? <div className="text-16 mb-[30px]">{text}</div> : null}
      <div className="w-full h-[205px]">
        <Pie {...config} />
      </div>
    </>
  );
};

export { PieCharts };
