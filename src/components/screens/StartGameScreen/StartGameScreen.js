import { useState } from "react";
import { CustomSection, StartButton } from "./StartGameScreen.styles.js";

const StartGameScreen = () => {
  const [showStartGameScreen, setShowStartGameScreen] = useState(true);
  const handleClickScreen = () => setShowStartGameScreen(!showStartGameScreen);
  return (
    <>
      {showStartGameScreen && (
        <CustomSection>
          <StartButton onClick={handleClickScreen}>Iniciar Game</StartButton>
        </CustomSection>
      )}
    </>
  );
};

export default StartGameScreen;
