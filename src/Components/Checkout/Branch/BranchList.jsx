import PropTypes from 'prop-types';
import { Button, Flex, Text, Box } from "@chakra-ui/react";
import styles from "./BranchList.module.css";

const BranchList = ({ branches, onSelectBranch }) => {
  return (
    <div>
      {branches.map((branch, index) => (
        <Flex key={index} alignItems="center" marginBottom="5px">
          <Button
            className={styles.branchItem}
            onClick={() => onSelectBranch(branch.name)}
            width="100%"
            marginRight="10px"
          >
            {branch.name}{branch.isOpen}
          </Button>
          <Box>
            <Text color={branch.isOpen ? "green.300" : "red.300"}>
              {branch.isOpen ? "Opened" : "Closed"}
            </Text>
          </Box>
        </Flex>
      ))}
    </div>
  );
};

BranchList.propTypes = {
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isOpen: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onSelectBranch: PropTypes.func.isRequired,
};

export default BranchList;
