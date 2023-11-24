import React, { useState, useEffect } from 'react';
import {
    addPlant,
} from "../api/plantApi";
import '../styles.css'; 


const AddPlant = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleAddPlant = async () => {
        try {
            // Вызываем метод API для добавления растения
            const newPlant = await addPlant(name, date);
            console.log('Plant added successfully:', newPlant);
            // Опционально: обновляем состояние компонента или выполняем другие действия
        } catch (error) {
            console.error('Error adding plant:', error);
            // Обрабатываем ошибку, например, отображаем сообщение об ошибке
        }
    };

    return (
        <div>
            <h2 className="h2">Add Plant</h2>
            <label className="label">Name:</label>
            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="label">Date:</label>
            <input className="input" type="text" value={date} onChange={(e) => setDate(e.target.value)} />

            <button className="button-15" onClick={handleAddPlant}>Add Plant</button>
        </div>
    );
};

export default AddPlant;