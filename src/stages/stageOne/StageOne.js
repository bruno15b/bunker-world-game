import { useEffect } from "react";
import HappyMan from "../../components/players/HappyMan";
import StartGameScreen from "../../components/screens/StartGameScreen";
import { TerrainOne, Floor } from "./StageOne.styles";

const StageOne = () => {
  const handleClickKeyDown = (event) => {
    console.log(event);
  };

  useEffect(() => {
    window.addEventListener("keypress", handleClickKeyDown);
    return () => {
      window.removeEventListener("keypress", handleClickKeyDown);
    };
  }, []);

  return (
    <>
      <StartGameScreen></StartGameScreen>
      <TerrainOne>
        <Floor>
          <HappyMan />
        </Floor>
      </TerrainOne>
    </>
  );
};

export default StageOne;
