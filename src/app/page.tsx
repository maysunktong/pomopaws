import CatStickerContainer from "../components/CatsContainer";
import Timer from "../components/Timer";
import { CatsContextProvider } from "../context/CatsContext";

export default function Home() {
  return (
    <div>
      <CatsContextProvider>
        home
        <Timer />
        <CatStickerContainer />
      </CatsContextProvider>
    </div>
  );
}
