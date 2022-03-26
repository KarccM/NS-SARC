import { useContext } from 'react';

export const Field = ({ field, Context, style, section }) => {
  const { label, value, type, name } = field;
  const { changeUser } = useContext(Context);
  var options = {};
  if (type === 'select') {
    options = [...field.options];
  }

  return (
    <div className="font-serif font-semibold">
      {type !== 'select' ? (
        <input
          type={type}
          value={value}
          name={name}
          onChange={(e) => changeUser(e, section ? section : '')}
          className={
            style +
            ' focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent'
          }
          placeholder={label}
        />
      ) : (
        <select
          name={name}
          className={style + ' w-full'}
          value={value}
          onChange={(e) => {
            changeUser(e, section ? section : '');
          }}
        >
          <option disabled value="">
            {label}
          </option>
          {options.map((ite) => {
            return <option value={ite}>{ite}</option>;
          })}
        </select>
      )}
    </div>
  );
};
