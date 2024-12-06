import { useState, useEffect } from "react";
import axios from "axios";

interface UseApiProps {
    apiParams?: string; // Optional to allow skipping API calls
}

interface ApiResponse<T> {
    data: T | null;
    error: boolean;
    loading: boolean;
}

const useApi = <T = unknown>({ apiParams = "" }: UseApiProps): ApiResponse<T> => {
    const [response, setResponse] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // Using environment variable for base URL, fallback to a default value
    const baseUrl = "https://fakestoreapi.com";

    useEffect(() => {
        if (!apiParams) return; // Skip if no API parameters are provided

        const controller = new AbortController(); // To handle request cancellation

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false); // Reset error state for each request
            try {
                const result = await axios.get<T>(`${baseUrl}/${apiParams}`, {
                    signal: controller.signal,
                });
                setResponse(result.data);
            } catch (error: unknown) {
                if (axios.isCancel(error)) {
                    // Conditional logging: only log for debugging or during development
                    if (process.env.NODE_ENV === "development") {
                        console.log("Request cancelled");
                    }
                } else if (axios.isAxiosError(error)) {
                    console.error("Axios Error:", error.response?.data || error.message);
                } else {
                    console.error("Unexpected Error:", error);
                }
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        const delayFetch = setTimeout(fetchData, 300); // Add a 300ms debounce

        return () => {
            clearTimeout(delayFetch); // Cancel debounce timer
            controller.abort(); // Cleanup on component unmount
        };
    }, [apiParams, baseUrl]);

    return { data: response, error: isError, loading: isLoading };
};

export default useApi;
