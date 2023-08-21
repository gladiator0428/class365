export type INavItem = {
  label: string;
  to: string;
};

export type INavItemProps = {
  subMenu?: INavItem[];
} & INavItem;

export type IButtonProps = {
  onClick?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  border?: string;
  font?: string;
  bg?: string;
  size?: "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLElement>;
