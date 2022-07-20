import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

const Box = styled.div`
background: ${props => props.color || 'blue'};
padding: 1rem;
display: flex;
width: 1024px;
margin: 0 auto;
${media.desktop`width: 768px;`}
${media.tablet`width: 100%;`};
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 2rem;
    font-weight: 600;
    margin: 0 auto;
    &:hover {
        background: black;
        color: white;
        border-color: white;
    }
    
    ${props =>
        props.inverted &&
        css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
            background: white;
            color: black;
        }
    `};
& + button {
    margin-left: 2rem;
}
`;

const StyledComponent = () => (
    <Box color='black'>
        <Button>Hello, World</Button>
        <Button inverted={true}>Only Border</Button>
    </Box>
);

export default StyledComponent;