import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiTacos, GiPizzaSlice, GiNoodles, GiChopsticks } from "react-icons/gi";

function Category() {
  return (
    <List>
        <SLink to={'/Cuisine/Mexican'}>
            <GiTacos />
            <h4>Mexican</h4>
        </SLink>
        <SLink to={'/Cuisine/Italian'}>
            <GiPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/Cuisine/Chinese'}>
            <GiNoodles />
            <h4>Chinese</h4>
        </SLink>
        <SLink to={'/Cuisine/Thai'}>
            <GiChopsticks />
            <h4>Thai</h4>
        </SLink>
    </List>
  )
} //end of Category func

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  

    svg {
      color: white;
    }
    h4{
      color: white;
    }
  }

`
export default Category