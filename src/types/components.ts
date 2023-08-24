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
  className?: string;
  size?: "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLElement>;

export type IResourceCardProps = {
  image?: string;
  badge: string;
  badgeColor: string;
  title: string;
};

export type IDiscoverCardProps = {
  title: string;
  description: string;
  avatar: string;
  name: string;
  role: string;
};

export type IFeatureCard = {
  image: string;
  title: string;
  subtitle: string;
};

export type IFAQCollapseProps = {
  title: string;
  desc: string;
  onClick: () => void;
  open: boolean;
};
