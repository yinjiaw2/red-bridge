import {
  Search,
  CreditCard,
  ShieldOff,
  ClipboardX,
  LayoutList,
  UserMinus,
} from "lucide-react";
import React from "react";

export type IconKey =
  | "search"
  | "creditCard"
  | "shieldOff"
  | "clipboardX"
  | "layoutList"
  | "userMinus";

export const ICON_MAP: Record<IconKey, React.ReactNode> = {
  search: <Search size={16} aria-hidden="true" />,
  creditCard: <CreditCard size={16} aria-hidden="true" />,
  shieldOff: <ShieldOff size={16} aria-hidden="true" />,
  clipboardX: <ClipboardX size={16} aria-hidden="true" />,
  layoutList: <LayoutList size={16} aria-hidden="true" />,
  userMinus: <UserMinus size={16} aria-hidden="true" />,
};

export interface ComparisonMeta {
  iconKey: IconKey;
  /** Row has a rich-text description with an <link> tag in the redBridge cell */
  richRedBridge?: boolean;
}

export const comparisonMeta: ComparisonMeta[] = [
  { iconKey: "search" },
  { iconKey: "creditCard" },
  { iconKey: "shieldOff", richRedBridge: true },
  { iconKey: "clipboardX" },
  { iconKey: "layoutList" },
  { iconKey: "userMinus" },
];
