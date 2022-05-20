import api from "../../Services/api";
import { useEffect, useState } from 'react';

import  Skeleton  from '@mui/material/Skeleton';

import './style.css';

export default function CardsBooks() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


    useEffect(() => {

        async function loadBooks() {
            const { data } = await api.get('api/v1/books')
            setBooks(data.data);
        }

        loadBooks();
    }, []);


    return (
        <div className="container">
            {books.map((item) => {
                return (
                    <div className="cardBox" key={item.id}>
                        <>
                            {
                                isLoading ? (
                                    <img style={{ width: 210, heigh: 118 }} src={item.image} alt="book" />
                                ) : (
                                    <Skeleton variant="rect" width={210} height={118} />
                                )
                            }
                        </>
                        <div className="contentContainer">
                            <p className="item-title"><strong>{item.title}</strong></p>
                            <p className="item-author">{item.author}</p>
                            <p className="item-description">{item.description}</p>
                            <div className="finalsContent">
                                <p>{item.genre}</p>
                                <p className="item-date">{item.published.split('-').reverse().join('/')}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}