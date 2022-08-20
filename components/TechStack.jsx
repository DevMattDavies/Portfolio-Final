import { TextStyle } from "./TextStyles.styles";
import { techTextContent } from "../data/text-content";
import {
  TechIconContainer,
  TechIconRow,
  TechstackInfoContainer,
} from "./Containers.styles";
import { TechIconLabel } from "./TextStyles.styles";
import Image from "next/image";
import styled from "styled-components";

import NextIcon from "../public/assets/tech-icons/next.png";
import ReactIcon from "../public/assets/tech-icons/react.png";
import CSSIcon from "../public/assets/tech-icons/css.png";
import JSIcon from "../public/assets/tech-icons/js.png";
import TSIcon from "../public/assets/tech-icons/typescript.png";
import APIIcon from "../public/assets/tech-icons/api.png";
import NodeIcon from "../public/assets/tech-icons/node.png";
import SQLIcon from "../public/assets/tech-icons/sql.png";

const TechTextAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin-top: 0.4rem;
`;

const NodeIconContainer = styled.div`
  width: 40px;
  height: 20px;
  position: relative;
  margin-top: 0.2rem;
`;

export default function TechStack() {
  return (
    <TechstackInfoContainer>
      <TextStyle>{techTextContent}</TextStyle>
      <TechIconContainer>
        <TechIconRow>
          <TechTextAndIcon>
            <TechIconLabel>Next.js</TechIconLabel>
            <TechIcon>
              <Image src={NextIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>React</TechIconLabel>
            <TechIcon>
              <Image src={ReactIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>CSS</TechIconLabel>
            <TechIcon>
              <Image src={CSSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>JS</TechIconLabel>
            <TechIcon>
              <Image src={JSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>TS</TechIconLabel>
            <TechIcon>
              <Image src={TSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>APIs</TechIconLabel>
            <TechIcon>
              <Image src={APIIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>Node.js</TechIconLabel>
            <NodeIconContainer>
              <Image src={NodeIcon} />
            </NodeIconContainer>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIconLabel>SQL</TechIconLabel>
            <TechIcon>
              <Image src={SQLIcon} />
            </TechIcon>
          </TechTextAndIcon>
        </TechIconRow>
      </TechIconContainer>
    </TechstackInfoContainer>
  );
}
