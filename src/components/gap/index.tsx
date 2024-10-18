import { FC, ReactNode } from 'react';

const SizeNumber = {
  small: 8,
  middle: 16,
  large: 24,
};

interface GapType {
  position?: 'horizontal' | 'vertical';
  className?: string;
  size?: 'small' | 'middle' | 'large';
  children?: ReactNode;
}

const Gap: FC<GapType> = (props) => {
  const { position, className, children, size = 'middle' } = props;

  const num = SizeNumber[size];
  const styleObj =
    position === 'vertical'
      ? {
          height: '100%',
          paddingLeft: `${num / 2}px`,
          paddingRight: `${num / 2}px`,
          display: 'inline-block',
        }
      : {
          paddingTop: `${num}px`,
        };

  return (
    <div className={className} style={styleObj}>
      {children}
    </div>
  );
};

export default Gap;
