'use client'
import { useState, useEffect, lazy, Suspense } from "react";
import page from '@/configs/page.json'

const HomePage = () => {
  const theme = page.theme;
  const [Page, setPage] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`@/themes/${theme}/page`)
      .then((module) => {
        setPage(() => module.default);
      })
      .catch((error) => {
        console.error("Failed to load theme:", error);
      });
  }, [theme]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {Page ? <Page /> : <div>Theme not loaded.</div>}
      </Suspense>
    </div>
  );
};

export default HomePage;