import styled from 'styled-components';
import theme from '../Theme/testTheme';

const StyledComponentWrapper = styled.div `
    font-family: ${theme.fonts.main};
    color: ${theme.colors.text};
    padding: 20px;
    background-color: ${theme.colors.primary};
`;

const ThemeButton = styled.button `
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
    background-color: ${theme.colors.accent};
    }
`;

export {
    StyledComponentWrapper,
    ThemeButton
};