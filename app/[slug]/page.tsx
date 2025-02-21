"use client";

import { usePageData } from '@/context/pageContext/PageContext';
import React from 'react';
import Navbar from '../home-component/Navbar';

const DemoPage: React.FC = () => {
  const { pageData, loading, error } = usePageData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
        <Navbar/>
      <h1>{pageData?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData?.PageCode || '' }} />
    </div>
  );
};

export default DemoPage;
