import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";

const TimelineBlock = styled(Box)({
  position: "relative",
  padding: "16px 0",
  paddingLeft: "20px",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "10px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    left: "0px",
    backgroundColor: "#007BFF",
  },
  "@media (max-width:600px)": {
    paddingLeft: "10px",
  },
});

const JobTitle = styled(Typography)({
  fontWeight: "bold",
  color: "#212529",
  "@media (max-width:600px)": {
    fontSize: "1rem",
  },
});

const JobDetails = styled(Typography)({
  fontStyle: "italic",
  marginBottom: "8px",
  color: "#6C757D",
  "@media (max-width:600px)": {
    fontSize: "0.9rem",
  },
});

const Experience = () => {
  return (
    <Container id="experience" sx={{ py: 5, px: [2, 4] }}>
      <Box display="flex" justifyContent="center" mb={5}>
        <Typography
          variant="h4"
          component="h1"
          color="#007BFF"
          fontWeight="bold"
          sx={{ "@media (max-width:600px)": { fontSize: "1.8rem" } }}
        >
          Experience
        </Typography>
      </Box>

      {[
        {
          title: "Meta / Sigma Connectivity - Carlsbad, CA",
          date: "July 2024 to Present",
          details: [
            "Successfully migrated a critical component of the Workplace platform to a new architecture.",
            "Improved the overall reliability of the Workplace platform by implementing automated error detection and alerting systems.",
            "Implemented automated testing and deployment scripts to streamline the development process and reduce errors.",
            "Worked closely with the core engineering team to resolve complex technical issues and improve overall system reliability and performance.",
            "Contributed to the development of internal tools and processes to improve engineering efficiency and productivity.",
          ],
        },
        {
          title: "Outlier - Encinitas, CA",
          date: "April 2023 to July 2024",
          details: [
            "Engaged extensively in reviewing and validating user-submitted prompts, ensuring high accuracy and reliability of AI models.",
            "Leveraged proficiency in JavaScript and Python to analyze and refine algorithms, enhancing response quality and minimizing errors.",
            "Debugged AI applications using advanced techniques to ensure optimal web performance.",
            "Guided AI technology integration and application, solving technical challenges and improving system functionality.",
            "Collaborated with global teams to maintain code quality and adhere to technical specifications.",
            "Continuously honed skills in AI and web development technologies, aligning with industry best practices.",
          ],
        },
        {
          title: "Promenade - Los Angeles, CA",
          date: "March 2022 to April 2023",
          details: [
            "Designed, built, and maintained full-stack applications with React, Redux, TypeScript, PostgreSQL, Node.js, GraphQL, and AWS.",
            "Conducted rigorous code reviews and wrote unit tests using Jest to ensure high code quality.",
            "Enhanced development team productivity by contributing to internal tools and libraries.",
            "Optimized state management, improving application performance by 40% through RTK Query.",
            "Implemented both RESTful APIs and GraphQL endpoints to streamline backend data flow.",
          ],
        },
        {
          title: "Ripe Metrics - San Diego, CA",
          date: "September 2021 to March 2022",
          details: [
            "Developed full-stack applications with React, Redux, TypeScript, MySQL, and Next.js.",
            "Utilized Postman for API testing and documentation, boosting development efficiency.",
            "Implemented a rigorous testing framework with Jest, reducing production bugs by 15%.",
            "Optimized React state management, improving rendering speed by 30%.",
            "Leveraged Next.js for server-side rendering, reducing page load times by 20%.",
          ],
        },
        {
          title: "Curb360 - Encinitas, CA",
          date: "June 2019 to September 2021",
          details: [
            "Built and maintained scalable full-stack applications with React, React Native, Redux, TypeScript, and GraphQL.",
            "Developed mobile applications with React Native to deliver a seamless user experience across platforms.",
            "Applied GraphQL and REST API best practices, optimizing network requests and improving app performance by 50%.",
            "Led transition to MongoDB, optimizing data structures and implementing efficient schemas to enhance database interactions.",
          ],
        },
      ].map((job, index) => (
        <Box key={index}>
          <TimelineBlock>
            <JobTitle variant="h6">{job.title}</JobTitle>
            <JobDetails variant="subtitle1">{job.date}</JobDetails>
            {job.details.map((detail, i) => (
              <Typography key={i} variant="body1" color="#343A40">
                • {detail}
              </Typography>
            ))}
          </TimelineBlock>
          {index < 4 && <Divider sx={{ my: 4, borderColor: "#CED4DA" }} />}
        </Box>
      ))}
    </Container>
  );
};

export default Experience;
