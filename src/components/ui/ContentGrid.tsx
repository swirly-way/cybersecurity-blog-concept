import { Grid, Box } from "@chakra-ui/react";

export default function Content() {
  const gridItems = [1, 2, 3, 4, 5, 6];

  return (
    <Grid
      mt={10}
      templateColumns="repeat(3, 1fr)"
      gap="6"
      maxW="container.lg"
      width="90%"
      mx="auto"
    >
      {gridItems.map((item) => (
        <Box
          key={item}
          bg="darkgreen"
          height="500px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          Item {item}
        </Box>
      ))}
    </Grid>
  );
}
