import React from "react";
import {Warehouse} from '../components/warehouse'
import { data } from '../Data/pointsAndBalance'

export class Balance extends React.Component{
    render(){
        return (
            <>
                <div>
                    {data.map((iter) => (
                        <div
                            className="mt-4 mx-auto text-center font-bold py-2
                            border-4 border-red-600 shadow-lg
                            w-1/2"
                            
                            key={iter.code}>
                                <Warehouse parent={iter.parent}
                                    balance={iter.balance}
                                    name={iter.name}
                                    code={iter.code}
                                />
                        </div>
                    ))
                }
                </div> 
            </>
        );
    }
}