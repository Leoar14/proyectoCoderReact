import { useState, useEffect, useCallback } from 'react'

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const executeAsyncFunction = useCallback(async () => {
    setLoading(true)
    try {
      const data = await asyncFunction()
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [asyncFunction])

  useEffect(() => {
    executeAsyncFunction()
  }, [executeAsyncFunction])

  return {
    data,
    error,
    loading
  }
}
