import { useState } from 'react'
import {
    createData as createDataService,
    updateData as updateDataService,
    getData as getDataService
} from '../services/Services'

export const useCustomHook = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const createData = async (url) => {
        setLoading(true)
        const response = await createDataService(data, url)
        setLoading(false)
        return response
    }

    const updateData = async (id, data, url) => {
        setLoading(true)
        const response = await updateDataService(id, data, url)
        setLoading(false)
        return response
    }


    const getData = async (id, url) => {
        setLoading(true)
        const response = await getDataService(id, url)
        setLoading(false)
        return response
    }


    return { data, loading, setData, createData, getData, updateData }

}