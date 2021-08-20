import React from 'react';
import VillagersList from '../components/villagers/VillagersList';
import { useVillagers } from '../hooks/useVillagers';

function VillagersContainer() {
  const { villagers, loading } = useVillagers();
  return (
    <div>
      {loading ? <h3>Loading ^_^</h3> : <VillagersList villagers={villagers} />}
    </div>
  );
}

export default VillagersContainer;