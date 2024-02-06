'use client'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Planets from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Home = () => {
  const [page, setPage] = useState('planets');
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient} >
      <div className='App'>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          {page === 'planets' ? (
            <Planets /> ) : 
          (
          <People /> 
          )}
        </div>
      </div>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default Home