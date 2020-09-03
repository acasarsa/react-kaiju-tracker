// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:3000/kaijus/'
const kURL = (id) => `http://localhost:3000/kaijus/${id}`
const sURL = (id) => `http://localhost:3000/sightings/${id}`
const sightingsURL = 'http://localhost:3000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`ERROR: %c${error}`, 'color: red;')

// fetch options 
const postOptions = (data) => {
  let options = {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)}
    return options
} 

const patchOptions = (data) => {
  let options = {method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }
    return options
}

const deleteOptions = {method: 'DELETE'}



//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches

export const postKaiju = (data) => fetch(kaijusURL, postOptions(data))
.then(parseData)
.catch(catchError)

export const patchKaiju = (id, data) => fetch(kURL(id), patchOptions(data))
.then(parseData)
.catch(catchError)

export const deleteKaiju = (id) => fetch(kURL(id), deleteOptions)
.catch(catchError)



//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches

export const postSighting = (data) => fetch(sightingsURL, postOptions(data))
.then(parseData)
.catch(catchError)

export const patchSighting = (id, data) => fetch(sURL(id), patchOptions(data))
.then(parseData)
.catch(catchError)

export const deleteSighting = (id) => fetch(sURL(id), deleteOptions)
.catch(catchError)
