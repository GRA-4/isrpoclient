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
            // �������� ����� API ��� ���������� ��������
            const newPlant = await addPlant(name, date);
            console.log('Plant added successfully:', newPlant);
            // �����������: ��������� ��������� ���������� ��� ��������� ������ ��������
        } catch (error) {
            console.error('Error adding plant:', error);
            // ������������ ������, ��������, ���������� ��������� �� ������
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