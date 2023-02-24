import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 5px;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: 700;
 :not(:last-child) {
    margin-right: 8px;
 }
  &:hover, &:focus {
   background-color: ${({ name }) => {
        switch (name) {
            case 'good':
                return 'green';
            case 'neutral':
                return 'navy';
            case 'bad':
                return 'crimson';
            default:
        throw new Error(`Unknown option - ${name}`);
        }
    }};
   color: white;
 }
`