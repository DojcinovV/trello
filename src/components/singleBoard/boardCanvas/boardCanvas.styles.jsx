import styled from "styled-components";

export const BoardCanvasContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;
export const BoardContainer = styled.div`
  user-select: none;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0);
`;
export const ListWrapper = styled.div`
  margin-left: 8px;
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;
export const ListContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;
export const ListHeader = styled.div`
  padding-right: 36px;
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;
`;
export const ListTitle = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  height: 28px;
  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 600;
  margin: -4px 0;
  height: 20px;
  min-height: 20px;
  padding: 4px 8px;
  resize: none;
  max-height: 256px;
`;
export const ListHeaderExtras = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 1;
`;
