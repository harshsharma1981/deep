'use client'
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type PageData = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  PageCode: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type PageContextType = {
  pageData: PageData | null;
  loading: boolean;
  error: string | null;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/pages');
        const data = await response.json();
        setPageData(data.data[0]); // Assuming the first object in data is what we need
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  return (
    <PageContext.Provider value={{ pageData, loading, error }}>
      {children}
    </PageContext.Provider>
  );
};

// Custom hook to use the PageContext
const usePageData = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageData must be used within a PageProvider');
  }
  return context;
};

export { PageProvider, usePageData };
