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
        <ProjectTitleStyle>Photosnap Designer Website</ProjectTitleStyle>
        <ProjectLinksRow>
          <ProjectLinkStyle
            target="_blank"
            href="https://photosnap-multipage-website-ashen.vercel.app/"
          >
            URL
          </ProjectLinkStyle>
          <ProjectLinkStyle
            target="_blank"
            href="https://github.com/DevMattDavies/photosnap-multipage-website"
          >
            Github
          </ProjectLinkStyle>
        </ProjectLinksRow>
      </ProjectRow>
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
    </ProjectInfoContainer>
  );
}
