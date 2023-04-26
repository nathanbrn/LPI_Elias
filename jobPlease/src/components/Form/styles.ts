import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 50%;

    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    background-color: #fff;

`;

export const ContainerInput = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-bottom: 12px;

    background-color: #fff;
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 1rem;

    color: #000;

    background-color: #fff;
`;

export const Title = styled.h2`
    font-weight: 800;
    font-size: 1.2rem;

    margin-bottom: 12px;

    color: #FF0000;
    background-color: #fff;
`;

export const Input = styled.input`
    width: 100%;

    padding: 0.3rem 4px;

    background-color: #F8F8FF;

    border-color: rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
    font-size: 0.7rem;
    color: #4F4F4F;

    background-color: #fff;
`;

export const TextArea = styled.textarea`
    width: 100%;

    padding: 0.5rem 4px;

    background-color: #F8F8FF;

    border-color: rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
    margin-top: 12px;

    padding: 0.5rem 2rem;

    background-color: #B22222;
    color: #fff;

    border: 1px solid #B22222;

    cursor: pointer;

    transition: all .2s ease-in-out;

    &:hover {
        background-color: #FF0000;
    }
`;