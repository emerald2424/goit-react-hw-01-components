import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 480px;
    padding: 10px 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Span = styled.span`
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
        
    background-color: ${props => {
       return  props.isOnline ? 'green' : 'red';
    }
    }; 
`;

export const Avatar = styled.img`
    display: block;
    height: auto;
    object-fit: cover;
`;

export const Name = styled.p`
    font-weight: 500;
`;