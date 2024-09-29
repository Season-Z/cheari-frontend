import { breadConfig } from '@/layout/config';
import { LayoutBreadcrumb } from '@cyberutopian/layout';

const HeaderContent = () => {
  return (
    <div className="mr-auto flex items-center gap-2">
      <LayoutBreadcrumb breadConfig={breadConfig} />
    </div>
  );
};

export default HeaderContent;
