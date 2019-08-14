import React from 'react';
import { highlightSelection } from '../utils';
import styled from 'styled-components';

const Outer = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
`;

const Inner = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

function Content({ setSelected }) {
  const onMouseUp = () => {
    const s = window.getSelection().toString();

    if (s === '') {
      return;
    }
    setSelected(s);
    console.log(s);
    highlightSelection();
  };

  return (
    <Outer onMouseUp={onMouseUp}>
      <Inner>
        Reference docs and spreadsheets seemingly make the world go ’round, but
        what if employees could just close those tabs for good without losing
        that knowledge? One startup is taking on that complicated challenge.
        Predictably, the solution is quite complicated, as well, from a tech
        perspective, involving an AI solution that analyzes everything on your
        PC screen — all the time — and highlights text onscreen for which you
        could use a little bit more context. The team at Polarity wants its tech
        to help teams lower the knowledge barrier to getting stuff done and
        allow people to focus more on procedure and strategy than memorizing
        file numbers, IP addresses and jargon. The Connecticut startup just
        closed an $8.1 million “AA” round led by TechOperators, with Shasta
        Ventures, Strategic Cyber Ventures, Gula Tech Adventures and Kaiser
        Permanente Ventures also participating in the round. The startup closed
        its $3.5 million Series A in early 2017. Interestingly, the
        enterprise-centric startup pitches itself as an AR company, augmenting
        what’s happening on your laptop screen much like a pair of AR glasses
        could. The startup’s computer vision software that uses character
        recognition to analyze what’s on a user’s screen can be helpful for
        enterprise teams importing things like a company Rolodex so that bios
        are always collectively a click away, but the real utility comes from
        team-wide flagging of things like suspicious IP addresses that will
        allow entire teams to learn about new threats and issues at the same
        time without having to constantly check in with their co-workers. The
        startup’s current product has a big focus on analysts and security
        teams.
      </Inner>
      {/*<div>{selected}</div>*/}
    </Outer>
  );
}

export { Content };
