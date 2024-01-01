import Axios from "axios"

export const currentUrl = window.location.href

export const getFetch = async (url) => {
  try {
    const response = await fetch(url, {
      method : "get",
      headers : {
        "Content-Type" : "application/json"
      }
    })
    if (!response.ok) {
      throw new Error("서버에 문제가 생겼습니다.")
    }
    const data = await response.json()
    return data
  }
  catch (err) {
    throw new Error(err)
  }
}

export const postFetch = async (url, datas) => {
  try {
    const response = await fetch(url, {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(datas)
    })
    if (!response.ok) {
      throw new Error("서버에 오류가 생겼습니다.")
    }
    const data = await response.json()
    return data
  }
  catch (err) {
    throw new Error(err)
  }
}

export const getAxios = async (url) => {
  try {
    const response = await Axios.get(url)
    return response.data
  }
  catch (err) {
    throw new Error(err)
  }
}

export const postAxios = async (url,datas) => {
  try {
    const response = await Axios.post(url,datas)
    return response.data
  }
  catch (err) {
    throw new Error(err)
  }
}