import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input 
                onChange={(e) => setInput(e.target.value)} 
                type='text' 
                value={input}
            />
        </div>
    </FormStyle>
  );
} //end of Search

const FormStyle = styled.form`
    margin: 0 auto;
    width: 100%;
    text-align: center; /* Center the child elements horizontally */

    div {
    position: relative;
    display: inline-block; /* Add this to prevent the input from expanding to full width */
    }

   input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
   }
   svg{
    position: absolute;
    top: 50%;
    left: 8px; /* Adjust the left positioning */
    transform: translateY(-50%);
    color: white;
    font-size: 1.5rem; /* Adjust the font size if needed */
   }
`

export default Search