import PublicLanding from "../views/PublicLanding";
import Button from "../components/Button";
import styled from "styled-components";

interface HomeProps {
    toggleTheme: () => void;
}

export default function Home({toggleTheme}: HomeProps): JSX.Element {

    return (
        <HomeStyle>
            <PublicLanding/>
            <Button variant={'primary'} onClick={toggleTheme}>Change theme</Button>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem
`


