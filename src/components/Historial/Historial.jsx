import React from 'react'
import './Historial.css'

export const Historial = () => {
    const data = JSON.parse(localStorage.getItem('historial'));
    return (
        <>
            {data ? (
                <main>
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
                                    <td>{item[0].toUpperCase()}</td>
                                    <td>{item[1].toUpperCase()}</td>
                                    <td>{item[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            ) : <h2>No hay datos en el historial</h2>}
        </>
    )
}
