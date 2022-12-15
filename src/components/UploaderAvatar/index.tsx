import { Box, Text, theme } from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

export function UploaderAvatar() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <Box w="100%" borderRadius="md" p="4" bg="gray.200">
          <Box
            {...getRootProps()}
            border="1px dashed"
            borderRadius="md"
            borderColor="gray.400"
            p={2}
            bg="gray.300"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <input {...getInputProps()} />
            <MdCloudUpload size={32} color={`${theme.colors.gray[400]}`} />
            <Text fontSize="sm" color="gray.400">
              Avatar image
            </Text>
          </Box>
        </Box>
      )}
    </Dropzone>
  );
}
