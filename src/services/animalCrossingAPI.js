export const fetchVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();

  return json.map((villager) => ({
    japaneseName: villager.japaneseName,
    image: villager.image,
    phrase: villager.phrase,
    _id: villager._id
  }));
};
