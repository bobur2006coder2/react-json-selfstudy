import React from 'react'
import { useCallback } from 'react';
import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import style from "./style.module.css";

// const [info, setInfo] = useState([]);

// const asnysFunc = useCallback(async () => {
//     const res = await fetch(url);
//     const date = await res.json();
//     setInfo(date);
// }, [url])

// useEffect(() => {
//     asnysFunc()
// }, [asnysFunc])
// console.log(info);

export default function Informations() {
    const [url, setUrl] = useState(["http://localhost:3000/dataa"]);
    const { date: info, pending,error } = useFetch(url);
    return (
        <div className={style["info-content"]}>
            <h1>Informations</h1>
            {pending && <div><h2>page loading...</h2></div>}
            {error && <div><h2>{error}</h2></div>}
            <ul>
                {info && info.map(({ name, loc, age }, index) => {
                    return (
                        <li key={index}>
                            {name} <br />
                            {age} <br />
                            {loc}
                        </li>
                    )
                })}
                <button onClick={() => setUrl("http://localhost:3000/data?loc=Uzb")}>Uzb</button>
                <button onClick={() => setUrl("http://localhost:3000/data?loc=Korea")}>Korea</button>
                <button onClick={() => setUrl("http://localhost:3000/data")}>Reverse</button>
            </ul>
        </div>
    )
}
