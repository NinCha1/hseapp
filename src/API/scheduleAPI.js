// import axios from "axios";
import react from 'react';
import axiosInstance from './API';


const getTimetables = (userId) => axiosInstance.get(`/timetable/${userId}/schedule`);
const getAssigments = (userId) => axiosInstance.get(`/deadline/${userId}/deadlines`);

const addTimetables = timetables => {
    const data = new FormData();
    data.append('title', timetables.title);
    data.append('price', timetables.price);
    data.append('categoryId', timetables.category.values);
    data.append('description', timetables.description);

    timetables.images.forEach((image, index) =>
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })
    )

    if (timetables.location)
        data.append('location', JSON.stringify(timetables.location));

    return axiosInstance.post(`/timetable/${userId}/schedule`, data);
}
export default {
    getTimetables,
    addTimetables,
    getAssigments,
}