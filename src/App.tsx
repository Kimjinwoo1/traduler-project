/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

import ConfirmModal from '@components/common/confirm/ConfirmModal';
import { confirmStore } from '@store/confirmStore';
import { userStore } from '@store/userStore';

import Router from './shared/Router';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isOpen } = confirmStore();
  const resetUser = userStore((state) => state.resetUser);

  const browserClosed = () => {
    localStorage.clear();
    resetUser();
  };

  useEffect(() => {
    window.addEventListener('beforeunload', browserClosed);
  }, []);

  return (
    <>
      <Router />
      <ToastContainer
        bodyClassName={() => 'text-sm font-white p-3 flex items-center'}
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Zoom}
      />
      {isOpen && <ConfirmModal />}
    </>
  );
};

export default App;
