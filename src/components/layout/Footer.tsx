import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";

const Footer = () => {
    return (
        <FooterStyle>
            <div className="icons">
                <AiFillGithub/>
            </div>
            <div className="text">
                <p>© {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </p>
            </div>

        </FooterStyle>
    )
}
export default Footer

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid gray;
  background-color: transparent;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: ${({ theme }) => theme.text};

  .icons {
    font-size: ${({ theme }) => theme.size.$500};
  }
`