import {useState , useCallback , useEffect} from 'react'
const fakeUsers = "https://jsonplaceholder.typicode.com/users";

export const useFetch = (url) => {
    
    const [users, setUsers] = useState([]);
    const getUsers =async () => {
        const respone = await fetch(fakeUsers);
        const res_users = await respone.json();
        setUsers(res_users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return users;
}


