import { FC, memo } from 'react';

const NavigationHeader: FC<{ showNav: boolean }> = (props) => {
  const { showNav } = props;

  return (
    <div className="flex items-center box-border h-[64px]">
      <div>
        <img
          src="/images/logo.png"
          alt="logo-small"
          width={40}
          height={40}
          className="inline-block w-[40px] h-[40px]"
        />
        {showNav ? (
          <img
            src="/images/logo-message.png"
            alt="logo-large"
            width={104}
            height={40}
            className="inline-block ml-[2px] w-[104px] h-[40px]"
          />
        ) : null}
      </div>
    </div>
  );
};

export default memo(NavigationHeader);
