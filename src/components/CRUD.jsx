import React from 'react';
import {
    getAllPlants, getPlant, editPlantDate, removePlant
} from "../api/plantApi";

import '../styles.css'; 

const CRUD = () => {
    const [plantData, setPlantData] = React.useState([]);
    const [editId, setEditId] = React.useState(null);
    const [editedDate, setEditedDate] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(null); // Состояние для отслеживания ID строки, которую удаляют

    React.useEffect(() => {
        getAllPlants().then((data) => {
            const dataArray = Array.isArray(data) ? data : [data];
            setPlantData(dataArray);
        });
    }, []);

    const handleEditClick = (id, date) => {
        setEditId(id);
        setEditedDate(date);
        setIsDeleting(null); // При редактировании отменяем удаление
    };

    const handleSaveClick = async (id) => {
        try {
            await editPlantDate(id, editedDate);
            setEditId(null);
            setEditedDate('');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            await removePlant(id);
            setIsDeleting(null);
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
    };

    return (
        <table className="MainTab">
            <tbody>
                <tr className="tr">
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
                {plantData.map((item, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.plantName || "No data"}</td>
                        <td>{editId === item.id ? (
                            <input
                                type="text"
                                value={editedDate}
                                onChange={(e) => setEditedDate(e.target.value)}
                            />
                        ) : (
                            item.date || "No data"
                        )}</td>
                        <td>
                            {editId === item.id ? (
                                <button className="button" onClick={() => handleSaveClick(item.id)}>Save</button>
                            ) : (
                                    <button className="button" onClick={() => handleEditClick(item.id, item.date)}>Edit</button>
                            )}
                        </td>
                        <td>
                            {isDeleting === item.id ? (
                                <button className="button" onClick={() => handleDeleteClick(item.id)}>Confirm Delete</button>
                            ) : (
                                    <button className="button" onClick={() => setIsDeleting(item.id)}>Delete</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CRUD;