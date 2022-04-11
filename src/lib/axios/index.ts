import defaultAxios from 'axios'

let axiosInstance

const axios = ( () => {

  if( !axiosInstance ) {

    axiosInstance = defaultAxios.create( {
      baseURL: 'http://localhost:3000'
    } )

  }

  return axiosInstance

} )()

export {
  axios
}