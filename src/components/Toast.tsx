import React from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  icon?: string;
}

export const Toast: React.FC<ToastProps> = ({ show, message, icon = 'check_circle' }) => {
  return (
    <div
      id="toast-notification"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 px-4 py-3 rounded-xl bg-[#283044] text-[#eef0ff] shadow-2xl flex items-center gap-2.5 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-[#89f5e7] text-[20px]">{icon}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
