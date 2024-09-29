import UserAvatar from '@/components/user-avatar';
import useClearLoginSate from '@/hooks/useClearLoginSate';
import Icon from '@/icon';
import { useGlobalContext } from '@/providers/global';
import { Dropdown, MenuProps, Modal } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderDropdown = () => {
  const router = useNavigate();
  const { user } = useGlobalContext();

  const loginClear = useClearLoginSate();

  // 打开下拉框
  const [open, setOpen] = useState(false);

  const focusBg = useMemo(() => (open ? 'bg-[#CEDFEF]' : ''), [open]);

  const normalUserItems: MenuProps['items'] = [
    {
      key: 'settings',
      label: '个人设置',
    },
    { type: 'divider' },
  ];

  const menuItems: MenuProps['items'] = [
    ...normalUserItems,
    {
      key: 'logout',
      label: '退出登录',
    },
  ];

  const onOpenChange = (op: boolean) => {
    setOpen(op);
  };

  const handleLogout = async () => {
    Modal.confirm({
      title: '确定要退出登录吗？',
      content: '为了您的账户安全，确认是否退出。',
      okButtonProps: { danger: true },
      okText: '退出',
      cancelText: '取消',
      onOk: async () => {
        loginClear.handleClear();
      },
    });
  };

  const handleClickMenuItem: MenuProps['onClick'] = (node) => {
    // 点击退出后菜单没隐藏，导致重复出现退出弹窗，所以手动关闭掉
    onOpenChange(false);

    if (node.key === 'logout') {
      handleLogout();
    } else if (node.key === 'settings') {
      router('/user/setting');
    }
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      menu={{
        items: menuItems.filter(Boolean),
        selectedKeys: [],
        onClick: handleClickMenuItem,
      }}
      overlayClassName="utopian-header-dropdown"
    >
      <div className={`cursor-pointer radius-8 px-[8px] py-[2px] transition ease-in-out duration-500 ${focusBg}`}>
        <div className="flex justify-start items-center">
          <UserAvatar size={32} />
          <div className="w-[110px] text-text-8">
            <div className="w-full title-14 truncate">{user?.nickname}</div>
            <div className="w-full text-12 truncate">{user?.teamName}</div>
          </div>
          <Icon
            type="icon-caret-down-filled"
            className="text-16"
            style={{
              rotate: open ? '180deg' : '0deg',
            }}
          />
        </div>
      </div>
    </Dropdown>
  );
};

export default HeaderDropdown;
