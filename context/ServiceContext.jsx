"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ServiceContext = createContext();

export function ServiceContextProvider({ children }) {
  const [services1, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Services
        const servicesRes = await fetch("https://deepadmin1.onrender.com/api/services?populate=*");
        const categoriesRes = await fetch("https://deepadmin1.onrender.com/api/service-categories");

        if (!servicesRes.ok || !categoriesRes.ok) throw new Error("Failed to fetch data");

        const servicesData = await servicesRes.json();
        const categoriesData = await categoriesRes.json();

        setServices(servicesData?.data || []);
        setCategories(categoriesData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ServiceContext.Provider value={{ services1, categories, loading }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServices() {
  return useContext(ServiceContext);
}
