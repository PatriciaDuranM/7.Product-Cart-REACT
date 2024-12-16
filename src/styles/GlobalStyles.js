import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from './ColorStyles';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Red Hat Text", sans-serif;
       background-color: ${COLORS.background};
        padding-top: 144px;
        padding-bottom: 271px;
        padding-inline: 64px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    @media screen and (width>768px) {
    body{
        padding-top: 105px;
        padding-bottom: 216px;
        padding-inline: 40px;
    }
}

    @media screen and (width>1024px) {
    body{
        padding-top: 132px;
        padding-bottom: 95px;
        padding-inline: 112px;
    }
}
`;
