import {queryClient} from "@/pages/_app";

export async function FindAllReports() {
    console.log("findAllReports")

    const todoId = 1
    //return queryClient.fetchQuery(['todos', todoId], fetchReports)

    try {
        const {isLoading, error, data} = queryClient.fetchQuery({
            queryKey: ['todos', todoId],
            queryFn: async () => {
                const response = await fetch('/api/reports')
                if (!response.ok) {
                    console.error('Network response was not ok')
                }
                else {
                    return response.json()
                }
            },
        })
        return {isLoading, error, data}
    }
    catch (e) {
        console.error(e)
    }

}

