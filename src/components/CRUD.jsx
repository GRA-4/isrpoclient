import React from 'react';
import {
    getAllPlants,
} from "../api/plantApi";

const CRUD = () => {
    const [plantData, setPlantData] = React.useState([])
    React.useEffect(() => {
        getAllPlants().then((data) => {
            setPlantData(data)
        })
    }, [])
    return (
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
                {plantData.map((item, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.PlantName}</td>
                        <td>{item.Date}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default CRUD;