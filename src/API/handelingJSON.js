import {useState} from 'react';

function renameKey( obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

function deleteKey(obj, key) {
    delete obj[key];
}


const handleSectionList = (data, key_title, key_data, delkey) => {
    data.forEach(element => {
        renameKey(element, key_title, 'title')
        renameKey(element, key_data, 'data')
        deleteKey(element, delkey)
    });
    return data;
}

export default {handleSectionList};