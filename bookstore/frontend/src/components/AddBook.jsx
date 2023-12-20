import { Box, Button, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const AddBook = () => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    availabe: '',
    image: ''
  })

  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel>Author</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="author" />

        <FormLabel>Description</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="description" />

        <FormLabel>Price</FormLabel>
        <TextField type="number" margin="normal" fullWidth variant="outlined" name="price" />

        <Button type="submit" variant="contained">Add Book</Button>
      </Box>
    </form>
  );
};

export default AddBook;
