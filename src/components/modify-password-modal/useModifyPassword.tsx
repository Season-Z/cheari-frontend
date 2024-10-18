import { Modal } from 'antd';
import { useState } from 'react';
import ModifyPasswordModal from './modify-password-modal';

const useModifyPassword = () => {
  const [showModal, setShowModal] = useState(false);

  // 修改密码后，调用退出登录接口，要求用户重新登录
  const handleCloseModifyPasswordModal = async () => {
    setShowModal(false);
    Modal.success({
      title: '密码修改成功',
      content: '请使用新密码重新登录。',
      onOk: () => {
        localStorage.removeItem('user');
        window.location.replace('/login/');
      },
    });
  };

  const onClose = () => {
    setShowModal(false);
  };

  return {
    showModal,
    setShowModal,
    ModifyPasswordModal: (
      <ModifyPasswordModal visible={showModal} onClose={onClose} onSuccess={handleCloseModifyPasswordModal} />
    ),
  };
};

export default useModifyPassword;
