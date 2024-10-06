import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { LuChefHat } from "react-icons/lu";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <LogoContainer>
            <LuChefHat />
            <Logo to={'/'}>Chef's Kiss</Logo>
          </LogoContainer>
            <AboutLink to={'/about'}>About</AboutLink> {/* Added About link */}
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font:family: 'Lobster Two', cursive;
`

const AboutLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 300;
  margin-right: 2rem;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Keep icon and logo together */
  svg {
    font-size: 2rem;
    margin-right: 0.1rem;  /* Add space between icon and text */
  }
`;
export default App;
