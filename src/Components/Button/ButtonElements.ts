import styled from 'styled-components'

export const ButtonContainerBig = styled.div`
    width: 315px;
    height: 89px;
    background: ${({ color }) => color};
    border-radius: 8px;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
    transition: all 100ms ease-in;
    cursor: pointer;
    :hover {
        scale: 1.05;
    }
`

export const ButtonContainerSmall = styled.div`
    width: 128px;
    height: 44px;
    background: ${({ color }) => color};
    border-radius: 8px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`
