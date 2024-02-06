import React from 'react'

const usePlanetFetch = async (page: number) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

export default usePlanetFetch