/*
 * @Author: KAAN
 * @Date: 2022-07-12 09:35:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-07-13 14:46:01
 * @Descripttion: 
 */

import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

export default function MRouter() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard" />
    },
    {
      path: 'dashboard',
      element: LazyloadComp('dashboard'),
      children: [
        {
          path: '',
          element: <Navigate to="/dashboard/recent" />
        },
        {
          path: 'recent',
          element: LazyloadComp('dashboard/recent')
        },
        {
          path: 'collection',
          element: LazyloadComp('dashboard/collection')
        },
        {
          path: 'category',
          element: LazyloadComp('dashboard/category')
        },
      ]
    },
    {
      path: 'login',
      element: LazyloadComp('login')
    },
    {
      path: '*',
      element: LazyloadComp('404')
    }
  ]);
  return element;
};

// 封装路由懒加载
const LazyloadComp = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`));
  return (
    <React.Suspense fallback={<>loading...</>}>
      <Comp />
    </React.Suspense>
  );
};
