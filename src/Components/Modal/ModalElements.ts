import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
`
export const ModalContainer = styled.div`
    width: 1162px;
    height: 1312px;
    background: #2d2d2d;
    margin-top: 136px;
    padding-right: 37px;
    padding-left: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const HorizontalLine = styled.div`
    border: 4px solid #ff9900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 1088px;
    height: 0px;
    margin-top: 61px;
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`
export const SmallButton = styled.button`
    width: 128px;
    height: 44px;
    background: ${({ color }) => color};
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 100ms ease-in;
    cursor: pointer;
    color: white;
    :nth-child(2) {
        margin-left: 20px;
    }
    :hover {
        scale: 1.05;
    }
`

export const ApplyContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 24px;
    align-items: center;
`
export const CloseButton = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    margin-top: 64px;
    color: #ff9900;
    cursor: pointer;
`
export const Input = styled.input`
    width: ${({ width }) => width};
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    outline: none;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    margin-top: 36px;
`
