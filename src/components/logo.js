import sarc from '../sarc.png';

export const Logo = ({style}) => {
    return <img
        src={sarc}
        alt="SARC Logo"
        className={style}
    />
    ;
};