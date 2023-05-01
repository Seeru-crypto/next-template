import PublicLanding from "../views/PublicLanding";
import styled from "styled-components";
import {setupAxiosInterceptors} from "../axiosInterceptor";

interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme}: HomeProps): JSX.Element {
    void setupAxiosInterceptors();

    return (
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


