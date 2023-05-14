import {SessionProps} from "@/views/PrivateLanding";
import axios from "axios";

interface GetRequestProps {
    url: string,
    sessionData: SessionProps['data']
}

export async function GetRequest({url, sessionData}: GetRequestProps) {
    const jwt = sessionData.accessToken
    //implement axios get query, with error handling
    const test =  await axios({
        method: 'get',
        url: url,
        responseType: "json",
        headers: {
            "Authorization": `Bearer ${jwt}`
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                return response.data
            }
        }).catch(function (error) {
            console.log(error);
            // show toast!
            return {}
        });

    return test;
}
