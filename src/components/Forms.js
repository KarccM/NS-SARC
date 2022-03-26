/*
  Input : [state,setState] : useState,
    Input-Fileds : [type],
    customStyle : {btn : 'style' , inputFiled : 'style'}
  Output: Form with state Managment + Style
*/
const btnStyle = 'rounded-full pl-2';
export const InputForm = (props) => {
  const data = props.data[0];
  const setData = props.data[1];
  const inputs = props.inputFileds;
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      {inputs.map((f, key) => {
        return (
          <input
            className={btnStyle}
            type={f[0]}
            name={Object.entries(data)[key][0]}
            // value={data[key]}
            onChange={handleInput}
            placeholder={f[1]}
          />
        );
      })}
    </>
  );
};

export const SelectForm = ({ data, inputFileds }) => {
  // const tempData = data[0];
  const setData = data[1];

  return (
    <>
      {inputFileds.map((filed) => {
        let name = filed[0];
        let options = filed[1];
        return (
          <select
            className={btnStyle}
            name={name}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
              console.log(data);
              const myObjStr = JSON.stringify(data);

              console.log(myObjStr);
            }}
          >
            <option disabled>{name}</option>
            {options.map((opt) => {
              return <option>{opt}</option>;
            })}
          </select>
        );
      })}
    </>
  );
};
