// require("dotenv").config()
import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

    const [data, setData] = useState();
    const apikey = "433d61513ff53bf0fd7d61b1550a3e0a";

    useEffect(() => {
        axios.get(`https://gnews.io/api/v4/top-headlines?token=${apikey}&country=in&lang=en&topic=breaking-news`).then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    return (
        <NewsContext.Provider value={{ data }}>{props.children}</NewsContext.Provider>
    )
}

export default NewsContextProvider
