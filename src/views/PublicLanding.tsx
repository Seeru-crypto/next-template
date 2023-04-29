import React, {useEffect} from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import {signIn, signOut, useSession} from "next-auth/react";

const PublicLanding = (): JSX.Element => {
    const { data: session } = useSession()

    useEffect(() => {
        console.log(session)
    }, [session])

    const loggedIn: JSX.Element = (<div>
        <h1>Hello {session?.user?.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
    </div>)
    const notLoggedin: JSX.Element = <div>
        <h1>NUT</h1>
        <button onClick={() => signIn()}>Sign in</button>
    </div>

    return (
        <PublicLandingStyle>
            <h1>Public Landing</h1>
            <div className="btnGrp">
                <Button variant={'primary'} onClick={() => console.log("Login")}>Log in</Button>
                <Button variant={'secondary'} onClick={() => console.log("register")}>Register</Button>
            </div>
            {session ? loggedIn : notLoggedin}
        </PublicLandingStyle>
    );
};

export default PublicLanding;

const PublicLandingStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 2rem;
  
  .btnGrp {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  `