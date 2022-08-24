import axios from "axios"

export const httpApirequest = async (options)=> {
    let httpApiResponse = {}
    let err = false
    await axios({
      ...options,
    })
      .then((res) => {
        if (!res) {
          return false
        }
        httpApiResponse = res?.data
        return httpApiResponse
      })
      .catch(function (error) {
        err = error.response
        httpApiResponse = error.response || error
  
      })
    return httpApiResponse
  }