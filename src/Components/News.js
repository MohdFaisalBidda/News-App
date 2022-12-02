import React, { useContext } from 'react'
import { NewsContext } from '../Components/NewsContext'
import NewsArticle from '../Components/NewsArticle';
import { Oval } from 'react-loader-spinner'


function News(props) {
    const { data } = useContext(NewsContext)
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 sm:px-10 sm:gap-10 justify-center px-2 my-10 text-center xl:gap-40 lg:place-content-center'>
            {data ? data.articles.map((news, index) => {
                return <div className=''>

                    <NewsArticle title={news.title} description={news.description} author={news.source.name}
                        urlToImage={news.image} publishedAt={news.publishedAt} url={news.url} key={index} />
                </div>

            }) : <div className='lg:grid lg:place-content-center'>
                <Oval
                height={80}
                width={80}
                color="#808080"
                wrapperStyle={{}}
                wrapperClass="text-center"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#808080"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
            </div>}
        </div>
    )
}

export default News
