import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: ${({theme, variant}) => theme.colors[variant] || theme.colors.primary};
    color: #fff;
    padding: 1rem;
    text-align: center;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        /*
        * Nothing to do here.
        * We dont change styling footer
        */
    }

    @media (min-width: 992px) {
        /*
        * Nothing to do here.
        * We dont change styling footer
        */
    }
`;

export default StyledFooter;