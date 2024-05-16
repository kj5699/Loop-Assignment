import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  padding: 4rem 0;
`;
 const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: ${props => props.theme.$primaryGreen};
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme.$primaryGreen};
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
    return (
        <Container>
             <Loader />
        </Container>
      );
}

export default Loading