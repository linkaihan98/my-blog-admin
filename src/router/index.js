/*
 * @Author: KAAN
 * @Date: 2022-07-12 09:35:36
 * @LastEditors: KAAN
 * @LastEditTime: 2022-08-02 15:19:47
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
          element: <Navigate to="/dashboard/editor" />
        },
        {
          path: 'editor',
          element: LazyloadComp('editor')
        },
        {
          path: 'category',
          element: LazyloadComp('category')
        },
        {
          path: 'tags',
          element: LazyloadComp('tags')
        },
        {
          path: 'charts',
          element: LazyloadComp('charts')
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
