import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle';
import { Oval } from 'react-loader-spinner'


function News(props) {
    const { data } = useContext(NewsContext)
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-36 sm:px-0 justify-center  my-10 md:px-20 px-20 text-center'>
            {data ? data.articles.map((news, index) => {
                return <div className=''>

                    <NewsArticle title={news.title} description={news.description} author={news.author}
                        urlToImage={news.urlToImage} publishedAt={news.publishedAt} url={news.url} key={index} />
                </div>

            }) : <Oval
                className=""
                height={80}
                width={80}
                color="#808080"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#808080"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />}
        </div>
    )
}

export default News
