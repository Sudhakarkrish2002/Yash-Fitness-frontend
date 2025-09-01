import { useState, useCallback } from 'react'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const executeApiCall = useCallback(async (apiFunction, successCallback = null) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction()
      
      if (successCallback) {
        successCallback(result)
      }
      
      return result
    } catch (err) {
      setError(err.message || 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    loading,
    error,
    executeApiCall,
    clearError
  }
}
