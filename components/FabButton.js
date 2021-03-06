// TODO: Add tooltip if you want
import React from 'react'
import styled from 'styled-components'
import PencilIcon from '../assets/icons/pencil'

const FabButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background: ${props => props.theme.primary};
  color: #fff;
  padding: 10px;
  font-size: inhernt;
  position: fixed;
  bottom: 15px;
  z-index: 60;
  right: 15px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  @media all and (max-width: 768px) {
    position: fixed;
    bottom: 80px;
    right: 20px;
  }
`
const Fab = props => {
  return (
    <FabButton className="uploadbtn" {...props}>
      <PencilIcon />
    </FabButton>
  )
}

export default Fab
