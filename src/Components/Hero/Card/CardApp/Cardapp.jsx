//CARDAPP.JSX
import { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import CardDetails from "../CardDetails/CardDetails";
import styles from "./Cardapp.module.css";

const Cardapp = ({ cards }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    onOpen();
  };

  return (
    <div className={styles.App}>
      <div className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              maxW="xs"
              variant="filled"
              align="center"
              onClick={() => handleCardClick(card)}
              cursor="pointer"
              bgColor={"white"}
            >
              <CardBody>
                <Image
                  w="150px"
                  h="auto"
                  src={card.imgsrc}
                  alt={card.imgalt}
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="1">
                  <Heading size="md">{card.title}</Heading>
                  <Text>{card.description}</Text>
                  <Text color="blue.600" fontSize="xl">
                    SAR {card.price}
                  </Text>
                </Stack>
                {/* <ButtonGroup mt="3" spacing="3">
                    <Button size="sm" variant="solid" colorScheme="green">
                      Buy now
                    </Button>
                  </ButtonGroup> */}
              </CardBody>
            </Card>
          ))}
      </div>

      {selectedCard && (
        <CardDetails product={selectedCard} isOpen={isOpen} onClose={onClose} />
      )}
    </div>
  );
};

Cardapp.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgsrc: PropTypes.string.isRequired,
      imgalt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cardapp;