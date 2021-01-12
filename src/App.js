import Routes from "./routes";

import LaundryCard from "./components/laudryCard";

const App = () => {
  const lavanderson = {
    name: "Nome da Lavanderia",
    score: "5.0",
    distance: "7.5KM",
    schedule: "07h até 18h",
    deliveryFee: "R$ 7,00",
  };
  return (
    <>
      <LaundryCard
        {...lavanderson}
        src="https://cdnb.artstation.com/p/assets/images/images/033/742/671/large/jihun-lee-.jpg?1610460381"
      />
      <LaundryCard
        {...lavanderson}
        src="https://cdnb.artstation.com/p/assets/images/images/033/742/671/large/jihun-lee-.jpg?1610460381"
      />
      <LaundryCard
        {...lavanderson}
        src="https://cdnb.artstation.com/p/assets/images/images/033/742/671/large/jihun-lee-.jpg?1610460381"
      />
      <LaundryCard
        {...lavanderson}
        src="https://cdnb.artstation.com/p/assets/images/images/033/742/671/large/jihun-lee-.jpg?1610460381"
      />
    </>
  );
};

export default App;
