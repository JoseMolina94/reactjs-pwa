import {useEffect, useState} from "react"
import { getVisualizationStatistics } from "../utils/getVisualizationStatistics";

export const useGetCharactersList = () => {
  const [charactersList, setCharactersList] = useState([])
  const [visualizationStatistics, setVisualizationStatitics] = useState([])
  const [queryInfo, setQueryInfo] = useState({})
  const [loadingCharactersList, setLoadingCharactersList] = useState(true)
  const initialURL = "https://rickandmortyapi.com/api/character"

  const getCharactersList = async (url = initialURL) => {
    setLoadingCharactersList(true)
    try {
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setQueryInfo(data.info)
          setCharactersList(data.results)

          setVisualizationStatitics(
            getVisualizationStatistics({
              dataArray: data.results,
              name: 'visualization',
              value: 'episode'
            })
          )

          setLoadingCharactersList(false)
        })
    } catch (e) {
      setLoadingCharactersList(false)
      console.log(e)
    }
  }

  const nextPage = () => {
    if (queryInfo?.next) {
      getCharactersList(queryInfo.next)
    }
  }

  const previousPage = () => {
    if (queryInfo?.prev) {
      getCharactersList(queryInfo.next)
    }
  }

  useEffect(() => {
    getCharactersList()
  }, [])

  return {
    charactersList,
    loadingCharactersList,
    previousPage,
    nextPage,
    visualizationStatistics
  }
}
