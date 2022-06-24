export const getAllData = (url) => {
    return fetch(`http://127.0.0.1:8000/api/${url}`)
        .then(res => res.json())
        .then(data => data)
}

export const createData = (data, url) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`http://127.0.0.1:8000/api/${url}`, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}

export const getData = (id, url) => {
    return fetch(`http://127.0.0.1:8000/api/${url}/${id}`)
        .then(res => res.json())
        .then(data => data)
}

export const updateData = (id, data, url) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`http://127.0.0.1:8000/api/${url}/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
}