import styled from "styled-components";
import {
  ProjectInfoContainer,
  ProjectRow,
  ProjectLinksRow,
} from "./Containers.styles";
import {
  ProjectLinkStyle,
  ProjectTextStyle,
  TextStyle,
  ProjectTitleStyle,
} from "./TextStyles.styles";

export default function Projects() {
  return (
    <ProjectInfoContainer>
      <ProjectRow>
        <ProjectTitleStyle>Wordle</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle
            target="_blank"
            href="https://wordle-in-react.netlify.app"
          >
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/DevMattDavies/wordle-react"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>
      <ProjectRow>
        <ProjectTitleStyle>1Source</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle target="_blank" href="https://1source.netlify.app">
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/SchoolOfCode/final-project_front-end-odd-socs"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>
      <ProjectRow>
        <ProjectTitleStyle>Tip Splitter</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle
            target="_blank"
            href="http://tip-calculator-devmattdavies.netlify.app"
          >
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/DevMattDavies/tip_calculator"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>
      <ProjectRow>
        <ProjectTitleStyle>Portfolio V1</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle
            target="_blank"
            href="https://dev-matt-davies-portfolio-v1.netlify.app"
          >
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/DevMattDavies/portfolio_website_2"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>
      <ProjectRow>
        <ProjectTitleStyle>Portfolio V2</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle
            target="_blank"
            href="https://portfolio-next-js-kappa.vercel.app/"
          >
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/DevMattDavies/portfolio-next-js"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>

      {/* <ProjectTextStyle>Wordle</ProjectTextStyle>
      <ProjectTextStyle>1Source</ProjectTextStyle>
      <ProjectTextStyle>Tip Splitter</ProjectTextStyle>
      <ProjectTextStyle>Portfolio V1</ProjectTextStyle>
      <ProjectTextStyle>Portfolio V2</ProjectTextStyle> */}
    </ProjectInfoContainer>
  );
}
