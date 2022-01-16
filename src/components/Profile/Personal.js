import StatusCard from '../../Dash/components/StatusCard';

const fakeData = [
      
];

export const Personal = ({ info }) => {
    console.log("IFOO",info);
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-10 overflow-autoh-1/3">    
            {
                info ?
                Object.keys(info).map((key) => {
                    return <StatusCard
                        color="red"
                        icon={key}
                        amount={info[key]}
                    />
                })
                    :
                <>Loading</>
            }
        </div>
    );
};

