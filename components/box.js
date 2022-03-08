import { Box, HStack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import RemoveUser from "./removeUser.js";
import Paragraph from "./paragraph.js";
import EventDetails from "../components/eventListingDetails";

export default function ReusableBox({
  title,
  type,
  content1,
  date,
  time,
  description,
  link,
  tags,
  payload,
  event_id,
  remove,
  refreshData,
}) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxWidth="300px"
      minWidth="400px"
      minHeight="300px"
    >
      <HStack mb="4">
        <Paragraph
          fontSize={"1.5em"}
          fontWeight={"extrabold"}
          content={title}
        />
      </HStack>
      <Paragraph content={type} fontSize={"1.2em"} fontWeight={"bold"} />
      <Paragraph
        content={date}
        fontSize={"1em"}
        fontWeight={"bold"}
        colour={"brand.mainPurple"}
      />
      <Paragraph content={time} fontSize={"1em"} fontWeight={"bold"} />
      <Paragraph content={description} fontSize={"1em"} fontWeight={"medium"} />
      <Paragraph content={link} fontSize={"1em"} fontWeight={"medium"} />
      {remove ? (
        <RemoveUser event_id={event_id} refreshData={refreshData} />
      ) : (
        <></>
      )}
      {payload ? (
        payload.map(
          (
            {
              event_id,
              event_type,
              event_date,
              event_start_time,
              event_end_time,
            },
            i
          ) => {
            if (i > 0) {
              return (
                <>
                  <EventDetails
                    type={event_type}
                    date={event_date}
                    starttime={event_start_time}
                    endtime={event_end_time}
                  />
                  <RemoveUser event_id={event_id} refreshData={refreshData} />
                  <br />
                </>
              );
            } else return;
          }
        )
      ) : (
        <></>
      )}
      <Paragraph content={content1} fontSize={"1.1em"} fontWeight={"bold"} />
      {tags ? (
        <Wrap pt={3}>
          {tags.map((tag) =>
            tag !== "" ? (
              <WrapItem>
                <Tag
                  size={"md"}
                  key={tag}
                  variant="solid"
                  bgColor={"brand.secondaryPurple"}
                >
                  {tag}
                </Tag>
              </WrapItem>
            ) : (
              <></>
            )
          )}
        </Wrap>
      ) : (
        <></>
      )}
    </Box>
  );
}
