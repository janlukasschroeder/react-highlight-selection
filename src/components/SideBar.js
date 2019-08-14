import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  //min-width: 300px;
  width: 100%;
  max-width: 300px;
  max-height: 100%;
  overflow-y: auto;
  border-left: 1px solid grey;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const Selection = styled.div`
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0;
`;

function SideBar({ selections = [] }) {
  return (
    <Outer>
      <Inner>
        {selections.map((selection, i) => (
          <Selection key={i}>{selection}</Selection>
        ))}
      </Inner>
    </Outer>
  );
}

export { SideBar };
