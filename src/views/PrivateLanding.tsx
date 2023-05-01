import React, {useEffect} from "react";
import styled from "styled-components";
import {signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import {findAllReports} from "@/requests";

const PrivateLanding = (): JSX.Element => {
    const {data: session} = useSession()
    const [reports, setReports] = React.useState([])

    const SignoutButton = () => {
        return (
            <Button variant={'secondary'} onClick={() => signOut()}>Sign out</Button>
        );
    }

    useEffect(() => {
        console.log(session)

    }, [])

    return (
        <PrivateLandingStyle>
            <h1>Private Landing</h1>
            <p>Nr of reports: {reports.length}</p>
            <p>Logged in as {session?.user?.name}</p>
            <SignoutButton />
        </PrivateLandingStyle>
    );
};

export default PrivateLanding;

const PrivateLandingStyle = styled.div`
      display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  border: 1px solid ${({theme}) => theme.text};
  padding: 2rem;
  
  .btnGrp {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

`