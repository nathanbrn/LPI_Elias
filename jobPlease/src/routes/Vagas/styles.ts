import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    background-color: #fff;

    overflow-y: scroll;
`;

export const ContainerVaga = styled.div`
    overflow-y: scroll;
    background-color: #fff;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #FFD700;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid orange;
    }

`;

export const ContainerVagancy = styled.div`
    background-color: #fff;

    width: 25rem;
`;

export const Title = styled.h1`
    font-size: 1.5rem;

    background-color: #fff;
    color: #000;

    margin: 8px 0;
`;

export const Modal = styled.div`
    width: 100%;
    margin-bottom: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #F0E68C;

    padding: 0.5rem 0.5rem;
    
    * {
        background-color: #F0E68C;
        color: #000;
    }
`;

export const Button = styled.button`
    background-color: #B22222;
    color: #fff;

    border: none;

    cursor: pointer;

    padding: 0.5rem 0.5rem;

    transition: all .2s ease-in-out;

    &:hover {
        background-color: #FF0000;
    }
`;

export const ContainerNew = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem 0.3rem;

    font-weight: bold;

    background-color: #FFD700;

    * {
        background-color: #FFD700;
        cursor: default;
    }

    span {
        font-size: 0.8rem;
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    max-width: 50%;

    div {
        span {
            font-size: 0.8rem;
        }
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;

    border: 1px solid;
    border-radius: 50%;
`;