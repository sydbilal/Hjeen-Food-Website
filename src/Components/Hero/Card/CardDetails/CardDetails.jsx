import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image, Text, Heading, Stack, Center } from '@chakra-ui/react';
import { addToCart } from '../../../../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useToast, Box } from '@chakra-ui/react'

const CardDetails = ({ product, isOpen, onClose }) => {
  const toast = useToast({
  })
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast({
      title: 'Product added to cart.',
      description: `The product has been added to your cart.`,
      status: 'success',
      duration: 2000,
      position: "bottom-left",
      render: () => (
        <Box color="black" p={3} bg="blue.500" borderRadius="md" boxShadow="md">
          <Text>The product has been added to your cart.</Text>
        </Box>
      ),
    });
  };

  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {product.imgsrc && product.imgalt && (
            <Image w="250px" src={product.imgsrc} alt={product.imgalt} borderRadius="lg" />
          )}
          <Stack mt="2" spacing="3">
            {product.title && <Heading size="md">{product.title}</Heading>}
            {product.price && <Text fontSize="xl" color="blue.600">SAR {product.price}</Text>}
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="left">
          <Button colorScheme="blue" mr={3} onClick={handleAddToCart}>
            + Add to cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardDetails;
