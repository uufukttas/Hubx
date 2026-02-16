import type { ComponentType } from 'react';

export interface IBottomTabsProps {
  activeTabId: number;
  features: IFeature[];
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
  activeTabId: number;
  features: IFeature[];
}
export interface IIconProps {
  className?: string;
  color?: string;
}
export interface IIntroductionBlockProps {
  buttonHref?: string | undefined;
  buttonText?: string | undefined;
  description: string;
  subTitle?: string | undefined;
  title: string;
}
export interface IItem {
  id: number;
  label: string;
  Icon?: ComponentType<IIconProps> | undefined;
}
export interface IPhoneMockupProps {
  phoneMockupImage: string;
  brightnessImage?: string | undefined;
  contrastImage?: string | undefined;
  exportIcons?: string[] | undefined;
  overlayImages?: string[] | undefined;
  paperImage?: string | undefined;
}
