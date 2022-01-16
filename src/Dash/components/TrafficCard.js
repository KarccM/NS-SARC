import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Progress from '@material-tailwind/react/Progress';
import { Link } from 'react-router-dom';

export default function TrafficCard({ headers, rows, title, link }) {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">{title}</h2>
          <Link color="transparent" to={link}>
            See More
          </Link>
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
}

const Header = ({ headers }) => {
  return (
    <thead className="thead-light">
      <tr>
        {headers.map((head) => {
          return <th className={headStyle}>{head}</th>;
        })}
      </tr>
    </thead>
  );
};

const Row = ({ rows }) => {
  return (
    <tbody>
      {rows.map(({ place, amount, value, color }) => {
        return (
          <tr>
            <th className={rowStyle}>{place}</th>
            <td className={rowStyle}>{amount}</td>
            <td className={rowStyle}>
              <Progress color={color} value={value} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
const rowStyle =
  'border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left';
const headStyle =
  'px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left';
