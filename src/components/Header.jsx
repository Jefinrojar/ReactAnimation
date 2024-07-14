import { useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button 
          whileHover={{scale:1.3}}
          transition={{type:'spring',stiffness:500}}
          onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
