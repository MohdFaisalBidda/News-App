import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

    const [data, setData] = useState();
    const apikey ="29cf5de29810421aaf5a7fc077f78066";

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}
        `).then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    return (
        <NewsContext.Provider value={{ data }}>{props.children}</NewsContext.Provider>
    )
}

export default NewsContextProvider
