"use client";

import { config } from "@/constants/url";
import { Product } from "@/types/product"
import axios from "axios";
import { useEffect, useState } from "react"

const useFetchProductList = () => {
    const [productList, setProductList] = useState<Product[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const { data, status } = await axios.get(`${config.BASE_URL}/${config.endpoints.products}`)
                if (status !== 200) {
                    throw new Error("Failed to fetch product list")
                }
                setProductList(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductList()
    },[])

    return { productList, loading, error };
}

export default useFetchProductList;