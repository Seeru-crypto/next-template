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
import {SessionProps} from "@/views/PrivateLanding";

interface GetRequestProps {
    url: string,
    sessionData: SessionProps['data']
}

export async function GetRequest({url, sessionData}: GetRequestProps) {
    const jwt = sessionData.accessToken

    try {
        const {isLoading, error, data: responseData} = queryClient.fetchQuery({
            queryKey: [ReportsSlug],
            queryFn: async () => {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
                if (!response.ok) {
                    console.error('Network response was not ok')
                } else {
                    return response.json()
                }
            },
        })
        return {isLoading, error, responseData}
    } catch (e) {
        console.error(e)
    }
}


// export async function HealthCheck() {
//     const url = "/api/actuator/health"
//     try {
//         const {isLoading, error, data: responseData} = await queryClient.fetchQuery({
//             queryKey: ['health'],
//             queryFn: async () => {
//                 const response = await fetch(url)
//                 if (response.ok) {
//                     console.log("API up")
//                     return response.json()
//                 } else {
//                     console.error('Network response was not ok')
//                     return {}
//                 }
//             },
//         })
//         return {isLoading, error, responseData}
//
//     } catch (e) {
//         console.log(e)
//     }
// }



export async function HealthCheck() {
    const url = "/api/actuator/health"

    try {
        const res = await fetch(url)
        if (res.ok) {
            console.log("API up")
            return res.json()
        }
        else {
            console.error('Network response was not OK')
            return {}
        }

    } catch (e) {
        console.log(e)
    }
}


// export async function HealthCheck() {
//     const url = "/api/actuator/health"
//     fetch(url)
//         .then((res) => {
//             if (res.ok) {
//                 console.log("server up")
//             }
//             else {
//                 console.log("server down")
//             }
//         })
//         .catch((e) => {
//             console.log(e);
//         });
// }
