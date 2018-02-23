import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(180px, 250px) 4fr;
  grid-template-rows: 1fr 65px;
  grid-gap: 0.5px;
`

export const Chats = styled.div`
  display: grid;
  overflow: -moz-scrollbars-none;
  grid-gap: 16px;
  grid-template-rows: 24px 1fr 1fr;
  background: #2a2d34;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  color: #fff;
  & h2,
  h4 {
    margin: 5px 0 5px 10px;
  }
  & h2 {
    grid-row: 1 / 2;
  }
`

export const RoomStyle = styled.div`
  margin: auto 8px;
  padding: 8px;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  img {
    height: 24px;
  }
  .img {
    flex: 1;
    display: flex;
  }
  .text {
    flex: 5;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
`

export const ChatsSection = styled.div`
  overflow: auto;
  & h4 {
    margin-top: 1rem;
    opacity: 0.6;
  }
  & .clipper {
    overflow: auto;
    width: 100%;
    height: 100%;
    position: relative;
  }

  & .scroller {
    overflow-y: auto;
    max-height: 100%;
  }

  & .track {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: #222;
    width: 4px;
  }
  & ._scrollbar .track {
    opacity: 1 !important;
  }

  & .bar {
    position: absolute;
    width: 100%;
    border-radius: 10px;
    background: #fd267d;
  }
  /* hide default chrome scrollbar */
  & .scroller::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export const Global = ChatsSection.extend`
  grid-row: 2 / 3;
`

export const Dms = ChatsSection.extend`
  grid-row: 3 / 4;
`

export const MessageBar = styled.div`
  display: flex;
  padding: 0.8rem 1.5rem;
  flex-direction: row;
  background: #2a2d34;
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  & input {
    border: none;
    flex: 1;
    border-radius: 3px;
    padding-left: 8px;
  }
  & form {
    flex: 1;
    display: flex;
  }
`