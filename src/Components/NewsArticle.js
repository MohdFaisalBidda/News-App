import React from 'react'
import logo from "../../src/notfound.jpg"

function NewsArticle({ title, description, url, urlToImage, author, publishedAt }) {
    return (

        <div className="text-center rounded-xl my-10 shadow-xl md:w-3/4">
            <div className="flex justify-center">
                <img className='' src={urlToImage ? urlToImage: logo} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
            <p className='py-1'>{description}</p>
            <h4 className='py-4 text-gray-600 text-xl font-medium'><small>By <i className='text-lg text-red-900'>{author ? author :"Unknow"}</i> on <i className='text-green-900 text-lg'>{publishedAt}</i></small></h4>
            <a target="_blank" href={url}><button className=' p-4 bg-blue-300 mb-4 rounded-xl font-bold cursor-pointer hover:bg-blue-600' >Read More</button></a>
        </div>
    )
}

export default NewsArticle
