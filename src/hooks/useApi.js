import {useState} from 'react';
import handelingJSON from '../API/handelingJSON';

export default useApi = (apiFunc, key_title, key_data, delkey) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        const handleResponse = await handelingJSON.handleSectionList(response.data, key_title, key_data, delkey);
        setLoading(false);
        if (response.status > 500) return setError(true);

        setError(false);
        setData(handleResponse);
    };
    
    return { data, error, loading, request }
}