import CatsContainer from "../components/CatsContainer";
import Timer from "../components/Timer";
import { CatsContextProvider } from "../context/CatsContext";
import { StickerPickerProvider } from "../context/StickerPickerContext";

export default function Home() {
  return (
    <CatsContextProvider>
      <div className="content-wrapper">
        <CatsContainer />
        <div className="timer-wrapper">
           <StickerPickerProvider>
          <Timer />
        </StickerPickerProvider>
        </div>
       
      </div>
    </CatsContextProvider>
  );
}
