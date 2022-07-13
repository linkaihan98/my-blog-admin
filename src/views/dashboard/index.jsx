/*
 * @Author: KAAN
 * @Date: 2022-07-13 14:11:55
 * @LastEditors: KAAN
 * @LastEditTime: 2022-07-13 14:48:40
 * @Descripttion: 
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardNav from './../../components/dashboard/dashboard-nav';

export default function Dashboard() {
  return (
    <div>
      <DashboardNav></DashboardNav>
      <Outlet></Outlet>
    </div>
  );
};
