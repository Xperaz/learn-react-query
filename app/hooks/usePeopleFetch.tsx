
const usePeopleFetch = async (page: number) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    return res.json();
}

export default usePeopleFetch