import type { ComponentType } from 'react';

export interface IBottomTabsProps {
  features: IFeature[];
  activeTabId: number;
  onChange: (id: number) => void;
}
export interface IFeature {
  buttonText: string;
  description: string;
  Icon: ComponentType<IIconProps>;
  id: number;
  name: string;
  phoneImage: string;
  subTitle: string;
  tabLabel: string;
  title: string;
  overlayImages?: string[];
  paperImage?: string;
  brightnessImage?: string;
  contrastImage?: string;
  exportIcons?: string[];
}
export interface IFeaturesErrorProps {
  message: string;
  onRetry?: () => void;
}
export interface IFeatureContentProps {
  features: IFeature[];
  activeTabId: number;
}
export interface IIconProps {
  className?: string;
  color?: string;
}
export interface IIntroductionBlockProps {
  subTitle?: string | undefined;
  title: string;
  description: string;
  buttonText?: string | undefined;
  buttonHref?: string | undefined;
}
export interface IItem {
  id: number;
  label: string;
  Icon?: ComponentType<IIconProps> | undefined;
}
export interface IPhoneMockupProps {
  phoneMockupImage: string;
  overlayImages?: string[] | undefined;
  paperImage?: string | undefined;
  brightnessImage?: string | undefined;
  contrastImage?: string | undefined;
  exportIcons?: string[] | undefined;
}
