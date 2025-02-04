import Head from "next/head";
import MainButton from "../components/buttons/mainButton";
import SecondaryButton from "../components/buttons/secondaryButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import Paragraph from "../components/paragraph";
import ContactUs from "../components/forms/emailform";
import { Spacer, Flex, Box, Center } from "@chakra-ui/react";

//add button tag below h1
//import mainButon from components/button
// import mainImage component and pass down the src and alt as props
//import InfoCard
//add image link
//in main div create react component for InfoCard with content props {text} and heading {}
// create grid to wrap main content in
// grid should encompass the header, main image, cards and button
// Added header placeholder text in infocard
// Replace any text on the page using the Paragraph component so we avoid hard-coding the font-family and maintain re-usability
//import SubHeader and replace paragraph tag with SubHeader tag - remove fontsize and weight
//InfoCard tags insert image url for each icon and headerContent{'Code Clubs'}  etc
//create grid for home page to show 2 images, 2 text boxes and a button to link to further info page - with our vision/rationale
//pick chakra grid layout - for grid within grid
//Under header, within first row of existing grid add another grid with 2 columns and rows
//added a row and column span (temporary border to be able to see boxes)
//Added text sub heading in header box and align left:
//create secondary button component in a file and import here
//created 2nd grid item within grid, to have 2nd image
//added image code and links from ImgBB website with stored images - delete href and border and a tag.
//put images in boxes and resize to 'sm'
// swapped out stack for flex for text in first column of nested grid (header, subheader and learn more button)
// Broke up the sections of the page with colours: alternating between grey and white to add depth > added bg="" in griditem
// Created another row in the overall grid to make room for the form at the bottom by amending the rows to 3 and adding another griditem

// const placeholderText =
//   "Welcome to the space to code and collaborate with other programmers. Join like-minded people who love to share coding and learn together.  Co:llab is a mutually supportive programming community to help each other continue on our self-development journey and help each other grow.";

export default function Home() {
  return (
    <Box w="100%" m="0">
      <Head>
        <title>co:llab</title>
        <meta
          name="&#x7b;co:llab&#x7d;"
          content="&#x7b;co:llab&#x7d; is a service that allows School of Code graduates and junior programmers to create and organise online events. It is a mutually supportive programming community designed to help each other continue on our self-development journey through code clubs, hackathons and guest speaker events."
        />
      </Head>
      <Box>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="center"
          bg="#f8f9fa"
        >
          <Flex
            w={{ sm: "100%", md: "50%" }}
            height={{
              sm: "auto",
              md: "auto",
            }}
            direction={"column"}
            justifyContent={"flex-end"}
            ml="2em"
            mt={4}
            padding={4}
            className="fadeUpAnimation"
          >
            <Box mt="1em" mb="1em" pt={{ base: "2em", sm: "2em", md: "1em" }}>
              <Header content={"Code & Collab."} />
            </Box>
            <Paragraph
              fontSize="2em"
              content={"A space to program collaboratively"}
            />
            <Box mt="1em" mb="1em">
              <Paragraph
                content={
                  "Welcome to the space to code and collaborate with other programmers. Join like-minded people who love to share coding and learn together. {co:llab} is a mutually supportive programming community designed to help each other continue on our self-development journey and help each other grow."
                }
                fontSize="1.1em"
              />
            </Box>
            <Box pt="1em">
              <a href={"#find-out-more"}>
                <SecondaryButton
                  content={"How it works"}
                  route={"#find-out-more"}
                />
              </a>
            </Box>
          </Flex>
          <Flex>
            <Box
              px="2em"
              mt="2.5em"
              height={"auto"}
              width={{ base: "100%", sm: "50%", md: "75%", lg: "750px" }}
            >
              <Box pt="3em">
                <MainImage
                  src="https://i.ibb.co/Cwd43Ds/New-Project-7.png"
                  alt="online-party-meeting-friends-people-keep-in-touch-using-video-call-on-laptop-vector-illustration"
                />
              </Box>
            </Box>
          </Flex>
        </Flex>
        <svg
          className={"wave-home"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 240"
        >
          <path
            fill="#f8f9fa"
            fill-opacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Box>
      <Box id={"find-out-more"} pt={"6em"}>
        <Flex direction={"column"} alignItems="center">
          <SubHeader content={"See what's happening"} />
          <Box m={{ base: "2em", sm: "2em", md: ".5em" }}>
            <Paragraph
              fontSize="1.2em"
              content={
                "Discover the ways in which you can benefit by joining our community."
              }
            />
          </Box>
        </Flex>
        <Center>
          <Box mt="2.5em" mx="1em">
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              justifyContent="center"
            >
              <InfoCard
                headerContent={"Code Clubs"}
                textContent={
                  "Code along with others in community-driven code clubs. Create or join a session to practice pair programming. Work together on solving your coding problems, or create new projects."
                }
                src={"https://i.ibb.co/1zSMfnC/icons8-programming-256.png"}
                alt={"code on a screen"}
              />
              <Spacer />
              <InfoCard
                headerContent={"Hackathons"}
                textContent={
                  "Join others to tackle a ‘Hackathon for Fun!’  Collaborate in a team to overcome a group challenge and build a working solution that ticks all the boxes. "
                }
                src={
                  "https://i.ibb.co/CHydWcQ/icons8-backend-development-256.png"
                }
                alt={"cogwheel"}
              />
              <Spacer />
              <InfoCard
                headerContent={"Guest Talks"}
                textContent={
                  "Come along and hear visiting industry experts. Ask questions and listen to answers on burning topics you really want to know more about.  "
                }
                src={"https://i.ibb.co/wh5h8cf/icons8-lecturer-512.png"}
                alt={"speaker"}
              />
            </Flex>
          </Box>
        </Center>
        <Box my="4em">
          <Center>
            <MainButton content={"Explore all events"} route={"/events"} />
          </Center>
        </Box>
      </Box>
      <Box bg="#f8f9fa" py="5em">
        <ContactUs />
      </Box>
    </Box>
  );
}
