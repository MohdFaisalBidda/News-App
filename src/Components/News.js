import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle';

function News(props) {
    const { data } = useContext(NewsContext)
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-36 px-12 sm:px-0 justify-center  my-10 md:px-12'>
            {data ? data.articles.map((news, index) => {
                return <div className=''>

                    <NewsArticle title={news.title} description={news.description} author={news.author}
                        urlToImage={news.urlToImage} publishedAt={news.publishedAt} url={news.url} key={index} />
                </div>
            }) : "Loading"}
        </div>
    )
}

export default News
