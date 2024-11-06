"use client";
import { useState, useEffect } from "react";

export function ViewCounter() {
  const [views, setViews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch("/api/views");
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error("Error fetching views:", error);
      } finally {
        setLoading(false);
      }
    };

    incrementViews();
  }, []);

  if (loading) return <p className="text-gray-600">...</p>;

  return (
    <div className="p-2 bg-zinc-900 rounded-md">
      <p className="text-sm text-white font-[family-name:var(--font-geist-mono)]">
        {views == null ? (
          <span>Erro ao obter acessos</span>
        ) : (
          <span>{views} Acessos totais</span>
        )}
      </p>
    </div>
  );
}
