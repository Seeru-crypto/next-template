import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import {signIn, signOut, useSession} from "next-auth/react";
import {useAppDispatch} from "@/store";

const PublicLanding = (): JSX.Element => {
    const {data: session} = useSession()
    const [userName, setUserName] = useState<String | null>(null)
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(session)
        if (session?.user?.name != undefined) setUserName(session.user.name)
    }, [session])

    const LoginButton: JSX.Element = <Button variant={'primary'} onClick={() => signIn()}>Log in</Button>
    const SignoutButton: JSX.Element = <Button variant={'secondary'} onClick={() => signOut()}>Sign out</Button>

    const getReportsButton: JSX.Element = <Button variant={'secondary'} onClick={() => dispatch}>Get Reports</Button>

    return (
        <PublicLandingStyle>
            <div>
                <h1>Public Landing</h1>
                {
                    userName && <p>Logged in as {session?.user?.name}</p>
                }
            </div>
            <div className="btnGrp">
                {userName== null ? LoginButton : SignoutButton}
                <Button variant={'secondary'} onClick={() => console.log("register")}>Register</Button>
            </div>
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
  border: 1px solid ${({theme}) => theme.text};
  padding: 2rem;
  
  .btnGrp {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  `