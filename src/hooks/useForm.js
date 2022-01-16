export const useForm = (e, prevState) => {
    console.log(prevState);
    var newState = [...prevState];
    var index = newState.findIndex(field => field.name === e.target.name);
    newState[index] = { ...newState[index], value: e.target.value };
    return newState;
};