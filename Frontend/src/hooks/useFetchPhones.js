import { useEffect, useState } from "react";

export const useFetchPhones = () => {
    const URL_API = "http://localhost:3000/phones";
    const [phones, setPhones] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch(URL_API);
            if (response.ok) {
                const json = await response.json();
                setPhones(json);
            }
        } catch (error) {
            console.error("Error fetching phones:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return phones;
};