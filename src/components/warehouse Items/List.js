import Stoke from "./Stoke";

const List = ({materials}) => {
  return <div className={"flex gap-x-2"}>
          {
              materials.map((material)=>{
                  return <>
                      <Stoke material={material}/>
                  </>
              })
          }
  </div>
}

export default List