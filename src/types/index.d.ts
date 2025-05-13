interface NavItem {
 href: string,
 label: string,
 icons?: string
}

interface TimerInterval {
  name: string,
  value: number
}

type CatsContextType = {
  cats: string[];
  setCats: React.Dispatch<React.SetStateAction<string[]>>;
};
