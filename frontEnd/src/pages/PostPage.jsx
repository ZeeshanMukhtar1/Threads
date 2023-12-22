import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import Actions from '../components/Actions';
import { useState } from 'react';
import Comment from '../components/Comment';
import useGetUserProfile from '../Hooks/useGetUserProfile';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
const PostPage = () => {
  const { user, loading } = useGetUserProfile();

  if (!user && loading) {
    return (
      <Flex justifyContent={'center'}>
        <Spinner size={'xl'} />
      </Flex>
    );
  }

  return (
    <>
      {/* Post Content */}
      <Flex flexDirection="column" w="100%">
        <Flex>
          {/* Left Side: Author's Picture, Name, Verified Icon */}
          <Flex alignItems="center" w={'full'} gap={3}>
            <Avatar size="md" src="https://bit.ly/dan-abramov" alt="Author" />
            <Flex>
              <Text fontWeight="bold" fontSize="sm">
                Mark Zuckerberg
              </Text>
              <Image w={4} h={4} src="/verified.png" ml={2} alt="verified" />
            </Flex>
          </Flex>

          {/* Right Side: Post Timing and Three Dots */}
          <Flex alignItems="center" gap={4}>
            <Text color="gray.light" fontSize="sm">
              1h
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>

        <Text my={3}>Let&apos;s talk about threads</Text>
        <Box borderRadius={6} overflow={'hidden'} border={'1px solid '} borderColor={'gray.light'}>
          <Image src={'/post1.png'} alt="post" w={'full'} />
        </Box>

        {/* Post Actions */}
        <Flex gap={3} my={3}>
          <Actions post={post} />
        </Flex>

        {/* Post Stats */}
        <Flex alignItems="center" gap={2}>
          <Text fontSize="sm" color="gray.light">
            {200} likes
          </Text>
          <Box w={1} h={1} bg="gray.light" borderRadius="full" />
          <Text fontSize="sm" color="gray.light">
            100 replies
          </Text>
        </Flex>

        <Divider my={4} />
      </Flex>

      {/* "Get" Button */}
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={2}>
          <Text fontSize="2xl">👋</Text>
          <Text>Get the latest news and updates from Threads</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      {/* Comments */}
      {/* <Comment
        comment="Oh , this is awesome..!"
        createdAt="just Now"
        likes={220}
        useravatar="https://avatars.githubusercontent.com/u/91063160?v=4"
        userName="Zeeshan Mukhtar"
      /> */}
    </>
  );
};

export default PostPage;
