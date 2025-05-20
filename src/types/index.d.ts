interface NavItem {
 href: string,
 label: string,
 icons?: string
}

interface TimerInterval {
  name: string,
  value: number
}

interface CatSticker {
  id: string,
  text: string
}

type CatsContextType = {
  catStickers: string[];
  setCatStickers: React.Dispatch<React.SetStateAction<string[]>>;
};

type StickerPickerContextType = {
  selectedSticker: string;
  setSelectedSticker: React.Dispatch<React.SetStateAction<string>>;
};

type UserContextType = {
  username: string | null;
  nameInput: string;
  isLoginModalOpen: boolean;
  setUsername: (name: string | null) => void;
  setNameInput: (input: string) => void;
  setIsLoginModalOpen: (open: boolean) => void;
};


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitButtonClick: () => void;
  buttonText: string;
  children: React.ReactNode;
}

interface StickersContainerProps {
  isRunning: boolean;
}
