import { useState, useEffect } from "react";
import { fetchVillagers } from "../services/animalCrossingAPI";


export const useVillagers = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchVillagers()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  return { villagers, loading };
};
