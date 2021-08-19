import React from 'react';
import Villager from './Villager';
import { useVillagers } from '../../hooks/useVillagers';

function VillagersList() {
  const { villagers } = useVillagers();

  return (
    <ul aria-label="villagers">
      {villagers.map((villager) => {
        return (
          <li key={villager._id}>
            <Villager {...villager} />
          </li>
        );
      })}
    </ul>
  );
}

export default VillagersList;
