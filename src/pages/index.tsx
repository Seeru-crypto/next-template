import PublicLanding from "../views/PublicLanding";
import styled from "styled-components";
import {useSession} from "next-auth/react";
import PrivateLanding from "@/views/PrivateLanding";

interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme}: HomeProps): JSX.Element {
    const {data: session} = useSession()

    if (session) return (
        <HomeStyle>
            <PrivateLanding/>
        </HomeStyle>
    )
    else return (
        <HomeStyle>
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


