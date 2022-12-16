import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

import { IImg } from "../../interfaces";

export function UploaderAvatar() {
  const [files, setFiles] = useState<IImg[]>([]);

  const onDrop = (acceptedFiles: []) => {
    console.log(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const thumb = files.map((file) => (
    <Box key={file.name} w="100%" borderRadius="md" p="4" bg="gray.200">
      <Avatar
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        size="xl"
      />
    </Box>
  ));

  return (
    <Flex
      w="100%"
      bg="gray.200"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {files.length > 0 && files ? (
        <Box
          w="100%"
          bg="gray.200"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          {thumb}
        </Box>
      ) : (
        <Box
          w="100%"
          bg="gray.200"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Avatar src="https://bit.ly/broken-link" size="md" />
        </Box>
      )}
      <Dropzone onDrop={(e: any) => onDrop(e)}>
        {({ getRootProps, getInputProps }) => (
          <Box w="100%" borderRadius="md" p="4" bg="gray.200">
            <Box
              {...getRootProps({
                className: "dropzone",
              })}
              border="1px dashed"
              borderRadius="md"
              borderColor="gray.400"
              p={2}
              bg="gray.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              color="gray.500"
              cursor="pointer"
              _hover={{
                borderColor: "blue.600",
                color: "blue.600",
              }}
            >
              <input
                {...getInputProps({
                  className: "dropzone-input",
                })}
              />
              <MdCloudUpload size={32} />
              <Text fontSize="sm">Avatar image</Text>
            </Box>
          </Box>
        )}
      </Dropzone>
    </Flex>
  );
}
