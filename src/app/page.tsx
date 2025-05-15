import CatsContainer from "../components/CatsContainer";
import Timer from "../components/Timer";
import { CatsContextProvider } from "../context/CatsContext";
import { StickerPickerProvider } from "../context/StickerPickerContext";

export default function Home() {
  return (
    <CatsContextProvider>
      <div className="content-wrapper">
        <div className="timer-wrapper">
          <StickerPickerProvider>
            <Timer />
          </StickerPickerProvider>
        </div>
        <CatsContainer />
      </div>
    </CatsContextProvider>
  );
}
