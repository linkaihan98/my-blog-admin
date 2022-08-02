/*
 * @Author: KAAN
 * @Date: 2022-07-13 14:11:55
 * @LastEditors: KAAN
 * @LastEditTime: 2022-08-02 15:10:27
 * @Descripttion: 
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardNav from './components/dashboard-nav';

// antd
import { Layout } from 'antd';

export default function Dashboard() {
  return (
    <Layout>
      <DashboardNav></DashboardNav>
      <Outlet></Outlet>
    </Layout>
  );
};
