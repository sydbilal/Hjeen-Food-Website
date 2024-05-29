import { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
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
            borderRadius="30px"
          >
            <CardBody className={styles.cardBody}>
              <div className={styles.cardImageContainer}>
                <Image
                  className={styles.cardImage}
                  src={card.imgsrc}
                  alt={card.imgalt}
                />
              </div>
              <Stack mt="2" spacing="1" className={styles.cardContent}>
                <Heading size="md">{card.title}</Heading>
                <Text>{card.description}</Text>
                <Text fontSize="xl">
                  SAR {card.price}
                </Text>
              </Stack>
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
