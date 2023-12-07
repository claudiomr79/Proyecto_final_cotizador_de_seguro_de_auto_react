import React from 'react'
import './Historial.css'

export const Historial = () => {
    const data = JSON.parse(localStorage.getItem('historial'));
    console.log(data);
    return (
        <>
            {data ? (
                <>
                    <h2>Historial</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Seguro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : <h2>No hay datos en el historial</h2>}
        </>
    )
}
