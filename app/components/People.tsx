import React, { useState } from 'react'
import usePeopleFetch from '../hooks/usePeopleFetch';
import { useQuery } from '@tanstack/react-query';
import { personType } from '../types';
import Person from './Person';

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData} = useQuery(
    ['planets', page], 
    () => usePeopleFetch(page),
    {keepPreviousData: true},
  );

  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === 'loading' && 
        <div>Loadin...</div>
      }
      {status === 'error' &&
        <div>error while fetching data!</div>
      }
      {status === 'success' && 
        <div>
          { data.results.map((person: personType) => (
            <Person key={person.name} person={person} />
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

export default People