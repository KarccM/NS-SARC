import {useState} from "react";

const SearchBox = ({allData, placeHolder,style, setFilteredData}) => {
    const [key , setKey] = useState("");

    function handleChange(e) {
        setKey(e.target.value);
        if(e.target.value === "")
           setFilteredData([...allData]);
        else{
            setFilteredData([...allData.filter((item)=> {
                return item.name.toLowerCase().includes(key.toLowerCase());
                })
            ])
        }
    }

    return <input type="text"
               className={style}
               onChange={(e)=>handleChange(e)}
               placeholder={placeHolder}
        />
}

export default SearchBox;