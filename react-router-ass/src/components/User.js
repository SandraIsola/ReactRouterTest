import React, { Component } from 'react'
import { useState } from 'react';
import useFetch from './Usefetch';

function User() {
    const [page, setPage] = useState(1);
    const {error, loading, data}= useFetch(
      `https://randomuser.me/api/?page=${page}&results=500&seed=abc`
    );

console.log(data);

  
  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 30;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && error) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
     <h1 className="header">Registered Consumers</h1>
{data?.results.slice(skip, skip + PER_PAGE).map((each, index) => {
    const name =  `${each.name.title} ${each.name.first} ${each.name.last}`;
    return (
        <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
          index + 1
        }.${name}`}</li>
    );
    })}
    {
         <button
         disabled={page <= 1}
         onClick={() => setPage((prev) => prev - 1)}
       >
         prev
       </button>
     }
     <p className="pagination">
       Pages: {page} of {pages}
     </p>
     {
       <button
         disabled={page >= pages}
         aria-disabled={page >= pages}
         onClick={() => setPage((prev) => prev + 1)}
       >
         next
       </button>
     }
     
     {Array.from({ length: pages }, (value, index) => index + 1).map(
       (each, index ) => (
         <button key={index}
         onClick={() => setPage(each)}>{each}</button>
       )
     )}
        </div>
  );
       }

    export default User;

