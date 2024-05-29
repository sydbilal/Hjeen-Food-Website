import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
  Heading,
  Stack,
  Box,
  useToast,
} from "@chakra-ui/react";
import { addToCart, increaseQuantity, decreaseQuantity, removeItemIfQuantityIsOne } from "../../../../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const CardDetails = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const cartItems = useSelector((state) => state.cart.cart); 

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast({
      title: "Product added to cart.",
      description: "The product has been added to your cart.",
      status: "success",
      duration: 2000,
      position: "bottom-left",
      render: () => (
        <Box color="black" p={3} bg="white" borderRadius="md" boxShadow="md">
          <Text>The product has been added to your cart.</Text>
        </Box>
      ),
    });
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity({ id: itemId }));
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      dispatch(removeItemIfQuantityIsOne({ id: itemId }));
    } else {
      dispatch(decreaseQuantity({ id: itemId }));
    }
  };

  const item = cartItems.find((cartItem) => cartItem.id === product.id);

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={true}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="rgba(255, 255, 255, 0.9)">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {product.imgsrc && product.imgalt && (
            <Box display="flex" justifyContent="center">
              <Image
                w="250px"
                src={product.imgsrc}
                alt={product.imgalt}
                borderRadius="lg"
              />
            </Box>
          )}
          <Stack pl="40px" mt="2" spacing="3">
            {product.title && <Heading size="md">{product.title}</Heading>}
            {product.price && (
              <Text fontSize="xl" color="black">
                SAR {product.price}
              </Text>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          {!item || item.quantity === 0 ? (
            <Button colorScheme="blue" mr={3} onClick={handleAddToCart}>
              + Add to cart
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Button
                colorScheme="blue"
                onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
              >
                -
              </Button>
              <Text mx={2}>{item.qt}</Text>
              <Button
                colorScheme="blue"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </Button>
            </Box>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CardDetails;
