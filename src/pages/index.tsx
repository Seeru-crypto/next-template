import PublicLanding from "../views/PublicLanding";
import styled from "styled-components";
import {Provider} from "react-redux";
import {store} from "@/store";

interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme}: HomeProps): JSX.Element {

    return (
        <Provider store={store}>
            <HomeStyle>
                <PublicLanding/>
            </HomeStyle>
        </Provider>
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


