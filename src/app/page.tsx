import Timer from "../components/Timer";
import { CatsContextProvider } from "../context/CatsContext";
import { StickerPickerProvider } from "../context/StickerPickerContext";

export default function Home() {
  return (
    <CatsContextProvider>
      <StickerPickerProvider>
        <Timer />
      </StickerPickerProvider>
    </CatsContextProvider>
  );
}
