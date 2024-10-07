import { FC, ReactNode } from 'react';

const SearchField: FC<{ label: string; children: ReactNode; className?: string }> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={'flex items-top ' + className}>
      <label className="flex-shrink-0">{label}：</label>
      {children}
    </div>
  );
};

export { SearchField };
