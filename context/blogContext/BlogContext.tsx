"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the structure for Blog Data
interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  image?: { formats: { small: { url: string } } }[];
}

// Define the structure for BlogContext
interface BlogContextType {
  blogs: Blog[];
  loading: boolean;
}

// Create Context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Context Provider
export function BlogContextProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("http://localhost:1337/api/blogs?populate=*");
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();

        // Set blogs data from API response
        setBlogs(data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
}

// Custom Hook for using the BlogContext
export function useBlogs() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogContextProvider");
  }
  return context;
}
