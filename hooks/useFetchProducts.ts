"use client";

import { config } from "@/constants/url";
import { Product } from "@/types/product"
import axios from "axios";
import { useEffect, useState } from "react"

interface ProductGroup {
    [key: string]: Product[];
}

const useFetchProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>();
    const [productGroup, setProductGroup] = useState<ProductGroup>()
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await axios.get(config.BASE_URL + config.endpoints.products)
                if (response.status !== 200) {
                    throw new Error("Failed to fetch product list")
                }
                const data = response.data as Product[];
                const uniqueCategory = new Set(data.map(product => product.category));
                const categoriesArray = Array.from(uniqueCategory);
                const groupData: ProductGroup = {};

                categoriesArray.forEach(category => {
                    const currentCategoryProduct = data.filter(product => product.category == category);
                    groupData[category] = currentCategoryProduct;
                })

                setProductGroup(groupData);
                setCategories(categoriesArray);
                setProductList(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductList()
    },[])

    return { productList, productGroup, categories, loading, error };
}

export default useFetchProductList;