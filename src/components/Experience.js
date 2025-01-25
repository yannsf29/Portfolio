import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";

const TimelineBlock = styled(Box)({
  position: "relative",
  padding: "16px 0",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "10px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    left: "-20px",
    backgroundColor: "#007BFF",
  },
});

const JobTitle = styled(Typography)({
  fontWeight: "bold",
  color: "#212529",
});

const JobDetails = styled(Typography)({
  fontStyle: "italic",
  marginBottom: "8px",
  color: "#6C757D",
});

const Experience = () => {
  return (
    <Container id="experience" sx={{ py: 5 }}>
      <Box display="flex" justifyContent="center" mb={5}>
        <Typography
          variant="h4"
          component="h1"
          color="#007BFF"
          fontWeight="bold"
        >
          Experience
        </Typography>
      </Box>

      <TimelineBlock>
        <JobTitle variant="h6">
          Meta / Sigma Connectivity - Carlsbad, CA
        </JobTitle>
        <JobDetails variant="subtitle1">July 2024 to Present</JobDetails>
        <Typography variant="body1" color="#343A40">
          • Successfully migrated a critical component of the Workplace platform
          to a new architecture.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Improved the overall reliability of the Workplace platform by
          implementing automated error detection and alerting systems.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Implemented automated testing and deployment scripts to streamline
          the development process and reduce errors.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Worked closely with the core engineering team to resolve complex
          technical issues and improve overall system reliability and
          performance.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Contributed to the development of internal tools and processes to
          improve engineering efficiency and productivity.
        </Typography>
      </TimelineBlock>

      <Divider sx={{ my: 4, borderColor: "#CED4DA" }} />

      <TimelineBlock>
        <JobTitle variant="h6">Outlier - Encinitas, CA</JobTitle>
        <JobDetails variant="subtitle1">April 2023 to July 2024</JobDetails>
        <Typography variant="body1" color="#343A40">
          • Engaged extensively in reviewing and validating user-submitted
          prompts, ensuring high accuracy and reliability of AI models.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Leveraged proficiency in JavaScript and Python to analyze and refine
          algorithms, enhancing response quality and minimizing errors.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Debugged AI applications using advanced techniques to ensure optimal
          web performance.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Guided AI technology integration and application, solving technical
          challenges and improving system functionality.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Collaborated with global teams to maintain code quality and adhere
          to technical specifications.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Continuously honed skills in AI and web development technologies,
          aligning with industry best practices.
        </Typography>
      </TimelineBlock>

      <Divider sx={{ my: 4, borderColor: "#CED4DA" }} />

      <TimelineBlock>
        <JobTitle variant="h6">Promenade - Los Angeles, CA</JobTitle>
        <JobDetails variant="subtitle1">March 2022 to April 2023</JobDetails>
        <Typography variant="body1" color="#343A40">
          • Designed, built, and maintained full-stack applications with a focus
          on usability, utilizing key technologies such as React, Redux,
          Typescript, PostgreSQL, Node.js, GraphQL, Redux, Mobx, MUI, RTK Query,
          Docker, Github, and AWS.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Championed code quality by conducting rigorous code reviews and
          writing unit tests using Jest.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Enhanced the productivity of the development team by contributing to
          internal tools and libraries.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Boosted application performance by 40% through the strategic
          implementation of RTK Query and effective state management libraries.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Designed and integrated both RESTful APIs and GraphQL endpoints,
          ensuring robust, efficient data retrieval and mutations for the
          application's backend.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Leveraged expertise in JavaScript and React to troubleshoot and
          resolve issues related to application functionality and performance.
        </Typography>
      </TimelineBlock>

      <Divider sx={{ my: 4, borderColor: "#CED4DA" }} />

      <TimelineBlock>
        <JobTitle variant="h6">Ripe Metrics - San Diego, CA</JobTitle>
        <JobDetails variant="subtitle1">
          September 2021 to March 2022
        </JobDetails>
        <Typography variant="body1" color="#343A40">
          • Designed, built, and maintained full-stack applications, utilizing
          key technologies such as React, Redux, Typescript, MySQL, Github,
          Tailwind, Postman, and Next.js.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Utilized Postman API for testing, documentation, and understanding
          the structure and behavior of APIs, significantly boosting the team's
          development efficiency.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Played a pivotal role in the implementation of a rigorous testing
          framework using Jest, which led to a 15% decrease in production bugs
          and fortified the application's resilience and reliability.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Drove a key initiative to enhance application responsiveness:
          minimized direct DOM interactions and maximized the use of React's
          state management, yielding a 30% performance boost in rendering
          speeds.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Regularly collaborated with cross-functional teams, including
          designers and product managers, to ensure the alignment of tech
          solutions with business goals.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Leveraged the capabilities of Next.js for server-side rendering and
          static site generation, resulting in a 20% reduction in page load
          times and bolstering overall user retention rates.
        </Typography>
      </TimelineBlock>

      <Divider sx={{ my: 4, borderColor: "#CED4DA" }} />

      <TimelineBlock>
        <JobTitle variant="h6">Curb360 - Encinitas, CA</JobTitle>
        <JobDetails variant="subtitle1">June 2019 to September 2021</JobDetails>
        <Typography variant="body1" color="#343A40">
          • Built and maintained scalable full-stack applications using a modern
          tech stack, including React, React Native, Redux, Typescript, and
          GraphQL.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Utilized React Native's capabilities to create intuitive user
          interfaces and deliver a seamless, native-like user experience across
          different mobile platforms.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Championed code quality by writing unit tests and conducting
          rigorous code reviews.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Applied deep understanding of GraphQL and REST API best practices to
          optimize network requests, improving overall application performance
          by 50%.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Collaborated effectively with team members to plan, prioritize, and
          execute development tasks.
        </Typography>
        <Typography variant="body1" color="#343A40">
          • Led the transition to MongoDB, optimizing data structures and
          implementing efficient schemas to ensure high-speed database
          interactions, which significantly enhanced the application's
          performance and scalability.
        </Typography>
      </TimelineBlock>
    </Container>
  );
};

export default Experience;
