import styled from 'styled-components'

export const ToDoGroupWrapper = styled.div`
    width: 100%;
    height: 100px;
    background: #2d2d2d;
    border-radius: 8px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 100ms ease-in;
    cursor: pointer;
    :hover {
        scale: 1.05;
    }
`
export const GroupName = styled.h2`
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`
export const GroupDate = styled.h2`
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`
export const GroupCompleted = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
`
export const DeleteIconContainer = styled.div`
    transition: all 100ms ease-in;
    :hover {
        color: red;
        scale: 1.1;
    }
`
