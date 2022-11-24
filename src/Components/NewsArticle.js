import React from 'react'

function NewsArticle({ title, description, url, urlToImage, author, publishedAt }) {
    return (

        <div className="text-center rounded-xl my-10 shadow-xl">
            <div className="flex justify-center">
                <img className='' src={urlToImage} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
            <p className='py-1'>{description}</p>
            <h4 className='py-4 text-amber-500 text-xl'><small>By {author} on {publishedAt}</small></h4>
            <a target="_blank" href={url}><button className=' p-4 bg-blue-300 mb-4 rounded-xl font-bold cursor-pointer hover:bg-blue-600' >Read More</button></a>
        </div>
    )
}

export default NewsArticle
