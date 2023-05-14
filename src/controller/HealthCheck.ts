export async function HealthCheck(): Promise<any> {
    const url = "/api/actuator/health"
    try {
        const res = await fetch(url)
        if (res.ok) {
            console.log("API up")
            return res.json()
        } else {
            console.error('Network response was not OK')
            return {"message":"'Network response was not OK'"}
        }
    } catch (e) {
        console.error('Network response was not OK2')
        console.log(e)
    }
}