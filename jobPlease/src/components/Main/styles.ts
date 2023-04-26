import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
`;

export const Input = styled.input`
    width: 50%;

    padding-left: 8px;

    background-color: #fff;
`;

export const Button = styled.button`
    padding: 0.5rem 3rem;

    background-color: #B22222;

    border: none;

    cursor: pointer;

    transition: all .4s ease-in-out;

    &:hover {
        background-color: #FF0000;
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
`;

export const Text = styled.p`
    font-size: 0.8rem;
`;