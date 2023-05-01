import {queryClient} from "@/pages/_app";

const url = "http://localhost:8880/api/"

const fetchReports = async () => {
    const response = await fetch('/api/reports');
    if (!response.ok) {
        throw new Error('Failed to fetch reports');
    }
    return response.json();
}

export async function FindAllReports() {
    console.log("findAllReports")

    const todoId = 1
    //return queryClient.fetchQuery(['todos', todoId], fetchReports)

    try {
        const {isLoading, error, data} = queryClient.fetchQuery({
            queryKey: ['todos', todoId],
            queryFn: async () => {
                const response = await fetch(url + 'reports')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            },
        })
        return {isLoading, error, data}
    }
    catch (e) {
        console.error(e)
    }

}

