import {queryClient} from "@/pages/_app";
import {ReportsSlug} from "@/configs";

export async function FindAllReports() {
    console.log("findAllReports")

    try {
        const {isLoading, error, data} = queryClient.fetchQuery({
            queryKey: [ReportsSlug],
            queryFn: async () => {
                const response = await fetch(`/api/${ReportsSlug}`)
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

