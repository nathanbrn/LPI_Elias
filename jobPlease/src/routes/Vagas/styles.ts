import styled from "styled-components";

export const Container = styled.main`
    height: 90vh;
    width: 80%;

    margin: 0 auto;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;

    background-color: #fff;
`;

export const ContainerVagas = styled.div`
    width: 45%;
    height: 100%;

    padding: 12px;
    
    border-radius: 8px;

    background-color: #FFFAFA;

    display: flex;
    flex-direction: column;
    gap: 12px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.1);

    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;

    background-color: #F0E68C;


    * {
        background-color: #F0E68C;
    }

    img {
        border-radius: 8px;
    }

`;

export const ContainerRemuneration = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    background-color: #F0E68C;
    
    span {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;

        background-color: #FF7F50;
        color: #fff;
        
        padding: 2px;
        
        * {
            background-color: #FF7F50;
            color: #fff;
        }
    }
`;

export const ContainerInfo = styled.div`
    width: 45%;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 8px;

    background-color: #FFFAFA;

    display: flex;
    flex-direction: column;

    padding: 12px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.1);

    }

`;

export const ContainerTitleVaga = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: 2rem;
        font-weight: 800;
    }

    div {
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        margin-bottom: 12px;

        span {
            background-color: #696969;

            padding: 4px;

            border-radius: 4px;

            color: #fff;
        }
    }

    button {
        width: 50%;
        padding: .8rem 1.2rem;

        cursor: pointer;

        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: #A9A9A9;

        font-size: 1rem;
        font-weight: bold;

        transition: all 0.2s ease-in-out;

        :hover {
            background-color: #696969;
            color: #fff;
        }
    }
`;

export const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled.h2`
    font-size: 1.6rem;
`;

export const ContainerInfoDados = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        h4 {
            margin-bottom: 8px;
        }

        p {
            margin-left: 8px;
        }
    }
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
        font-size: 1.3rem;
    }
    
    p {
        font-size: 0.9rem;
        margin-left: 1.5rem;
        text-align: start;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;


        h5 {
            font-size: 1rem;
        }

        ul {
            margin-left: 1.5rem;
            font-size: 0.9rem;
        }
    }
`;


