const apiURL = process.env.REACT_APP_API_URL

async function client(endpoint) {
  const config = {method: 'GET'}

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(response => response.json())
}

export {client}
