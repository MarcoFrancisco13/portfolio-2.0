import * as React from "react";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const languageData = data.allContentfulSkillsLanguages.nodes;
  const frameworkData = data.allContentfulSkillsFrameworks.nodes;
  const toolData = data.allContentfulSkillsTools.nodes;

  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      {/* <!-- HERO --> */}
      <div class="flex flex-col pt-60 max-[600px]:bg-[url('../images/hero-mobile.png')] max-[1250px]:bg-[url('../images/hero-tablet.png')] min-[1250px]:bg-[url('../images/hero.png')] bg-no-repeat bg-cover h-screen">
        {/* <!-- Logo --> */}
        <div class="flex justify-center">
          <img class="logo" src="../images/logo.png" alt="" />
          <StaticImage className="w-[200px]" src="../images/logo.png" />
        </div>

        {/* <!-- HERO Text --> */}
        <div class="flex flex-col">
          <div class="flex justify-center pt-6">
            <p class="text-4xl">
              Hi! I'm <span class=" font-bold text-[#f97419]">Marco!</span>
            </p>
          </div>

          <div class="flex justify-center text-center">
            <p class="text-xl">Tech-enthusiast and Software Developer!</p>
          </div>
        </div>
      </div>

      {/* <!-- About me --> */}
      <div class="flex flex-col p-10 pb-0">
        <h1 class="text-4xl font-bold">About Me 📚</h1>

        <div className="flex flex-col min-[1000px]:flex-row mt-20 items-center px-10">
          <div className="flex w-full max-w-[490px]  rounded-full overflow-hidden min-[1000px]:mr-20">
            <StaticImage src="../images/portrait.jpeg" />
          </div>

          <div class="w-full text-2xl text-left max-[999px]:text-center max-[999px]:py-12">
            <p className="text-xl">
              Hi! My name is Marco Francisco and I am currently a 4th year in
              Ateneo de Manila University, pursuing a degree in{" "}
              <span class="text-[#f97419] font-semibold">
                BS Management Information Systems.
              </span>{" "}
              Despite the managerial side of my course, I also have a great
              interest in coding efficient and responsive platforms!
            </p>
            <br />
            <p className="text-xl">
              I have had the privilege of interning at various companies that
              fostered my skills in{" "}
              <span class="text-[#f97419] font-semibold">Web Development</span>{" "}
              and{" "}
              <span class="text-[#f97419] font-semibold">
                Software Engineering.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col justify-center mt-20 p-20 pt-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold">SKILLS</h1>
        </div>

        <div className="flex flex-col min-[768px]:flex-row pt-5 justify-around">
          <div className="max-[767px]:w-full w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4 mt-8">
            <h4 className="text-xl font-medium">Languages</h4>
            <div className="flex flex-row flex-wrap justify-center">
              {languageData.map(({ language }) => (
                <div className="rounded-lg bg-[#f97419] mr-2 mt-2 px-2">
                  {language}
                </div>
              ))}
            </div>
          </div>

          <div className="max-[767px]:w-full w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4 mt-8">
            <h4 className="text-xl font-medium">Frameworks</h4>

            <div className="flex flex-row flex-wrap justify-center">
              {frameworkData.map(({ framework }) => (
                <div className="rounded-lg bg-[#f97419] mr-2 mt-2 px-2">
                  {framework}
                </div>
              ))}
            </div>
          </div>

          <div className="max-[767px]:w-full w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4 mt-8">
            <h4 className="text-xl font-medium">Tools</h4>

            <div className="flex flex-row flex-wrap justify-center">
              {toolData.map(({ tool }) => (
                <div className="rounded-lg bg-[#f97419] mr-2 mt-2 px-2">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- My Projects --> */}
      <div>

      <div className="text-center">
          <h1 className="text-4xl font-bold">PROJECTS</h1>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const languageQuery = graphql`
  query MyQuery {
    allContentfulSkillsLanguages {
      nodes {
        language
      }
    }
    allContentfulSkillsFrameworks {
      nodes {
        framework
      }
    }
    allContentfulSkillsTools {
      nodes {
        tool
      }
    }
  }
`;

export const Head = () => <title>Marco Francisco</title>;
