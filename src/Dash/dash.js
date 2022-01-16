import StatusCard from '../Dash/components/StatusCard';
import PageVisitsCard from '../Dash/components/PageVisitsCard';
import TrafficCard from '../Dash/components/TrafficCard';
import {
  fakePointsFam,
  fakePointsHr,
  headers,
  pointFamsHeader,
} from '../Data/Fake';

export default function Dashboard() {
  return (
    <>
      <div className="px-3 md:px-8 h-40 bg-gray-900 " />
      <div className="bg-gray-900 w-full h-screen">
        <div className="px-3 md:px-8">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
              <StatusCard
                color="pink"
                icon="الكلي"
                title="المستخدمين"
                amount="1740"
                // percentage="3.5"
                // percentageIcon="arrow_upward"
                // percentageColor="green"
                date="الشهر الماضي"
              />
              <StatusCard
                color="orange"
                icon="النقاط"
                title="الشعب"
                amount="21"
                // percentage="0"
                // percentageIcon="arrow_downward"
                // percentageColor="red"
                date="الاسبوع الماضي"
              />
              <StatusCard
                color="purple"
                icon="VNR"
                title="المتطوعين"
                amount="640"
                // percentage="1.10"
                // percentageIcon="arrow_downward"
                // percentageColor="orange"
                date="البارحة"
              />
              <StatusCard
                color="blue"
                icon="الاغاثة"
                title="الموظفين"
                amount="23%"
                // percentage="12"
                // percentageIcon="arrow_upward"
                // percentageColor="green"
                date="اليوم"
              />
            </div>
          </div>
        </div>

        <div className="px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-5">
              <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                <PageVisitsCard
                  headers={headers}
                  rows={fakePointsHr}
                  title="العاملين في الشعبة"
                  link="/points"
                />
              </div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                <TrafficCard
                  headers={pointFamsHeader}
                  rows={fakePointsFam}
                  title="العائلات في الشعبة"
                  link="/points/families"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
