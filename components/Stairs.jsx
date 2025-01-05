import { motion } from "framer-motion";

// variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of step
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* render & motion divs,each representing a step of stairs 
    Each div will have the same animation defined by the StairsAnimation Obkect.
    The delay for each div is calculated dynamically based on It's recersed index,
    creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
