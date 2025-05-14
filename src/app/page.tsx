import CatsContainer from "../components/CatsContainer";
import Timer from "../components/Timer";
import { CatsContextProvider } from "../context/CatsContext";
import { StickerPickerProvider } from "../context/StickerPickerContext";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CatsContextProvider>
        <StickerPickerProvider>
          <Timer />
        </StickerPickerProvider>
        <CatsContainer />
      </CatsContextProvider>
    </div>
  );
}
