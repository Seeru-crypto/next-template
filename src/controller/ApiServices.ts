/*export async function PostRequest(body: unknown, url: string): Promise<Response> {
    return await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    }).then(response => {
        if (!response.ok) return Promise.reject(response)
        return response.json() as Promise<Response>
    });
}

export async function PutRequest(body: unknown, url: string): Promise<Response> {
    return await fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    }).then(response => {
        if (!response.ok) return Promise.reject(response)
        return response.json() as Promise<Response>
    })
}*/

import {queryClient} from "@/pages/_app";
import {ReportsSlug} from "@/configs";

export async function GetRequest(url: string, jwt:string) {
    try {
        const {isLoading, error, data:responseData} = queryClient.fetchQuery({
            queryKey: [ReportsSlug],
            queryFn: async () => {
                const response = await fetch(`/api/${ReportsSlug}`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
                if (!response.ok) {
                    console.error('Network response was not ok')
                }
                else {
                    return response.json()
                }
            },
        })
        return {isLoading, error, responseData}
    }
    catch (e) {
        console.error(e)
    }
}