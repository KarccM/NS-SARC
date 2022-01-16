import Stoke from './Stoke'

const Header = ({point, coordinator, materials}) => {
    const welcomeStatement = " اهلاً ";
    return<>
        <p className={"text-3xl text-center py-6"}>{coordinator} {welcomeStatement}</p>
        <p className={"text-2xl text-center"}>{point}</p>
        <p className={"text-2xl text-center"}>الرصيد الحالي</p>
        <listcomp className={"flex"}>
            {
                materials.map((material)=>{
                    return <>
                        <Stoke material={material}/>
                    </>
                })
            }
        </listcomp>
    </>
}
export default Header;