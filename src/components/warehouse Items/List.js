import StatusCard from '../../Dash/components/StatusCard';

const List = (data) => {
  const getRandomColor = () => {
    var colors = ['purple', 'pink', 'blue', 'orange', 'red', 'green'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomProvider = () => {
    var providers = ['WFP', 'ICRC', 'ISOS', 'ADRA', 'OxFam', 'UNHCR'];
    return providers[Math.floor(Math.random() * providers.length)];
  };
  var materials = Object.keys(data.materials).map((key) => [
    key,
    data.materials[key],
  ]);
  return (
    <div className={'grid grid-cols-4 gap-x-2'}>
      {materials.map((material) => {
        return (
          <StatusCard
            color={getRandomColor()}
            icon={material[0]}
            title={getRandomProvider()}
            amount={material[1]}
            // percentage="3.5"
            // percentageIcon="arrow_upward"
            // percentageColor="green"
            date="الان"
          />
        );
      })}
    </div>
  );
};

export default List;
