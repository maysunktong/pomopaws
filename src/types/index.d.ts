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
