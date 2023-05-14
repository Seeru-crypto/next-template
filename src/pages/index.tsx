import PublicLanding from "../views/PublicLanding";
import styled from "styled-components";
import {useSession} from "next-auth/react";
import PrivateLanding from "@/views/PrivateLanding";
import {useEffect} from "react";
import {HealthCheck} from "@/controller/HealthCheck";
import {message} from 'antd';

interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme}: HomeProps): JSX.Element {
    const {data: session} = useSession()
    const [messageApi, contextHolder] = message.useMessage();
    // useToast(messageApi)

    useEffect(() => {
        // HealthCheck().catch(() => {
        //     console.log("caught")
        // })
    }, [])

    if (session) return (
        <HomeStyle>
            {contextHolder}
            <PrivateLanding/>
        </HomeStyle>
    )
    else return (
        <HomeStyle>
            {contextHolder}
            <PublicLanding/>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`


