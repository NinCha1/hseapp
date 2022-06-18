import {useState} from 'react';
import handelingJSON from '../API/handelingJSON';

export default useApi = (apiFunc) => {
    console.log(apiFunc)
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        console.log(response)
        // const handleResponse = await handelingJSON.handleSectionList(response.data, key_title, key_data, delkey);
        setLoading(false);
        if (response.status > 500) return setError(true);

        setError(false);
        setData(response);
    };
    
    return { data, error, loading, request }
}