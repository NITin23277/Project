import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';

// import {
//     SearchOutlined
//   } from '@ant-design/icons';



function NewsApp() {
    const apiKey = '74bf323267254dcdbbc0991deac2bd9c';
    
   
    const [newsList , setNewsList] = useState([]);
    const [query , setQuery] = useState('tesla');
    const apiUrl= `https://newsapi.org/v2/everything?q=${query}&from=2023-05-19&sortBy=publishedAt&apiKey=${apiKey}
    `;

    
    const queryInputRef = useRef(null);

    useEffect(() =>{
        fetchData();
    },[query])

    async function fetchData(){


        try{
        const response =  await fetch(apiUrl); // promise return
        const jsonData =  await response.json();
        setNewsList(jsonData.articles);

        } catch(e){
            console.log(e , 'erroor occured');
        }
    }

    function handleSubmit (event) {
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue);

    }

  return (
    <div className='news-app'>
        <div className='heading'>
        <h1 style={{fontFamily:'monospace', fontSize:'3rem' , textAlign: 'left' ,marginRight:'auto' ,marginBlock:'auto'}}> <p className='taza'>Taza</p><p className='khabre'>ख़बरें</p> </h1>
            <form onSubmit={handleSubmit}>
            <input className="query-input"type="text"  ref={queryInputRef}/>
            <input className='btn-submit' onClick={handleSubmit} type="submit" placeholder="cnas" value="Submit"/>
            {/* <SearchOutlined /> */}
            
        </form> 
        </div>
    <div className='all-news'style={{display: 'grid' , gridTemplateColumns: 'repeat(2, 48%)', justifyContent:'space-between' , rowGap:'20px'}}>
        {newsList. map((news)=> {
            return <News key={news.url} news={news} />
        })}
    </div>
    </div>

  )
}

export default NewsApp