import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const languageData = data.allContentfulSkillsLanguages.nodes;
  const frameworkData = data.allContentfulSkillsFrameworks.nodes;
  const toolData = data.allContentfulSkillsTools.nodes;

  return (
    <body>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      {/* <!-- HERO --> */}
      <div class="flex flex-col pt-60 bg-[url('../images/hero.png')] bg-no-repeat bg-cover h-screen">
        {/* <!-- Logo --> */}
        <div class="flex justify-center">
          <img class="logo" src="../images/logo.png" alt="" />
          <StaticImage className="w-[200px]" src="../images/logo.png" />
        </div>

        {/* <!-- HERO Text --> */}
        <div class="flex flex-col">
          <div class="flex justify-center pt-6">
            <p class="text-4xl">
              Hi! I'm <span class=" font-extrabold">Marco!</span>
            </p>
          </div>

          <div class="flex justify-center">
            <p class="text-xl">Tech-enthusiast and Software Developer!</p>
          </div>
        </div>
      </div>

      {/* <!-- About me --> */}
      <div class="flex flex-col h-screen p-40">
        <h1 class="text-4xl">About Me 🙋‍♂️</h1>

        <div class="flex flex-col pt-10">
          <div class="flex flex-row pt-10">
            <div class="w-1/3 text-[70px] text-center">📚</div>

            <div class="w-full pt-3 text-2xl">
              I am currently a 4th year in Ateneo de Manila University, pursuing
              a degree in
              <p class="">BS Management Information Systems</p>
            </div>
          </div>

          {/* <div class="flex flex-row pt-10">
            <div class="w-1/3 text-[70px] text-center">🎮</div>

            <div class="w-full pt-3 text-2xl">My hobbies include</div>
          </div> */}

          {/* Skills */}

          <div className="flex flex-col justify-center mt-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold">SKILLS</h1>
            </div>

            <div className="flex flex-col md:flex-row pt-10 justify-around">
              <div className="w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4">
                <h4 className="text-xl">Languages</h4>
                <div className="flex flex-row flex-wrap justify-center">
                  {languageData.map(({ language }) => (
                    <div className="rounded-lg bg-[#f97419] mr-2 mt-2 px-2">
                      {language}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4">
                <h4 className="text-xl">Frameworks</h4>

                <div className="flex flex-row flex-wrap justify-center">
                  {frameworkData.map(({ framework }) => (
                    <div className="rounded-lg bg-[#f97419] mr-2 mt-2 px-2">
                      {framework}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/4 text-center shadow-black rounded-lg bg-[#36454F] text-white px-8 py-4">
                <h4 className="text-xl">Tools</h4>

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
        </div>
      </div>

      {/*  */}

      {/* <!-- My Projects --> */}
      <div></div>

      {/* <!-- Contact Me --> */}
      <div class="flex flex-col justify-center text-center py-8 bg-[#36454F]">
        <div class="flex flex-row justify-center">
          <div class="flex w-1/4 text-5xl justify-around text-[#f97419]">
            <a
              href="https://www.linkedin.com/in/marco-francisco-5aa8ab1a1/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin hover:text-[#db6616]"></i>
            </a>
            <a href="mailto:mfranciscowork13@gmail.com">
              <i class="fa-solid fa-envelope hover:text-[#db6616]"></i>
            </a>
            <a href="https://github.com/MarcoFrancisco13" target="_blank">
              <i class="fa-brands fa-github hover:text-[#db6616]"></i>
            </a>
          </div>
        </div>
      </div>

      <script src="static/custom.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </body>
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
