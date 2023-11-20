

export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: { limit: '100' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

// const BASE_URL = 'https://exercisedb.p.rapidapi.com/'

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
    return data
}