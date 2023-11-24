import { $host } from "./index";
import axios from 'axios';

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const getAllPlants = async () => {
    const { data } = await $host.get('/getPlants')
    return data
}
export const getPlant = async () => {
    const { data } = await $host.get('/getPlant?id=2')
    return data
}




const baseURL = 'https://localhost:7163'; // ваш серверный адрес

export const addPlant = async (name, date) => {
    try {
        const response = await axios.post(`${baseURL}/addPlant?name=${name}&date=${date}`);
        return response.data;
    } catch (error) {
        console.error('Error adding plant:', error);
        throw error;
    }
};

export const editPlantDate = async (id, date) => {
    try {
        const response = await axios.put(`${baseURL}/editPlantDate?id=${id}&date=${date}`);
        return response.data;
    } catch (error) {
        console.error('Error editing plant date:', error);
        throw error;
    }
};

export const removePlant = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/removePlant?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error removing plant:', error);
        throw error;
    }
};