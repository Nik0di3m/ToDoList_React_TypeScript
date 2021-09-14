import styled from 'styled-components'

export const TaskInputContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 24px;
`
type TextStye = {
    done?: boolean
}

export const TaskInputField = styled.input<TextStye>`
    width: 1043px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    border-bottom: 1px solid #ff9900;
    color: white;
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
    outline: none;
`
export const DeleteIconContainer = styled.div`
    transition: all 100ms ease-in;
    cursor: pointer;
    :hover {
        color: red;
        scale: 1.1;
    }
`
