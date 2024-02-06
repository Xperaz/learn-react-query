import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Planet from './Planet';
import { planetType } from '../types';
import usePlanetFetch from '../hooks/usePlanetFetch';

const Planets = () => {
  const [page, setPage] = useState(1);
  const {data, status, isPreviousData} = useQuery(
      ['planets', page], 
      () => usePlanetFetch(page),
      { keepPreviousData: true}
  );

  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && 
        <div>Loadin...</div>
      }
      {status === 'error' &&
        <div>error while fetching data!</div>
      }
      {status === 'success' && 
        <div>
          { data.results.map((planet: planetType) => (
            <Planet key={planet.name} planet={planet} />
          ))
          }
          <button onClick={() => setPage((old: number) => Math.max(old - 1, 1))}>
            Previous
          </button>
          {page}
          <button onClick={() => setPage((old) => !isPreviousData && data.hasMore ? old : old + 1)}>
            Next
          </button>
        </div>
      }
    </div>
  )
}

export default Planets