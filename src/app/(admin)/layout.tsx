import React from 'react';
import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('rendering admin layout');
  return (
    <div>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </div>
  );
}
