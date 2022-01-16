import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Link } from 'react-router-dom';
//connect to api and get real data :D

const thStyle =
  'px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left';

const PageVisitsCard = ({ headers, rows, title, link }) => {
  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">{title}</h2>
          {<Link to={link}>See More</Link>}
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <Header headers={headers} />
            <Row rows={rows} />
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

const Header = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => {
          return <th className={thStyle}>{head}</th>;
        })}
      </tr>
    </thead>
  );
};

const Row = ({ rows }) => {
  // console.log(data.keys);
  return (
    <tbody>
      {rows.map(({ id, name, volunteer, officer }) => {
        return (
          <tr>
            <th className={rowStyle}>{id}</th>
            <td className={rowStyle}>{name}</td>
            <td className={rowStyle}>{volunteer}</td>
            <td className={rowStyle}>{officer}</td>
          </tr>
        );
      })}
    </tbody>
  );
  // return <></>
};
const rowStyle =
  'border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left';
export default PageVisitsCard;
