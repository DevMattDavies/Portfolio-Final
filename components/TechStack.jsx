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
`;

const TechIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;

export default function TechStack() {
  return (
    <TechstackInfoContainer>
      <TextStyle>{techTextContent}</TextStyle>
      <TechIconContainer>
        <TechIconRow>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>Next.js</TechIconLabel>
              <Image src={NextIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>React</TechIconLabel>
              <Image src={ReactIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>CSS</TechIconLabel>
              <Image src={CSSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>JS</TechIconLabel>
              <Image src={JSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>TS</TechIconLabel>
              <Image src={TSIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>APIs</TechIconLabel>
              <Image src={APIIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>Node.js</TechIconLabel>
              <Image src={NodeIcon} />
            </TechIcon>
          </TechTextAndIcon>
          <TechTextAndIcon>
            <TechIcon>
              <TechIconLabel>SQL</TechIconLabel>
              <Image src={SQLIcon} />
            </TechIcon>
          </TechTextAndIcon>
        </TechIconRow>
      </TechIconContainer>
    </TechstackInfoContainer>
  );
}
