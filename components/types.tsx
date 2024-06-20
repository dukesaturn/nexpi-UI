export interface ThemeOptions {
    primaryColor?: string;
    secondaryColor?: string;
    secondaryLightColor?: string;
    backgroundColor?: string;
    shadowColor?: string;
    secondaryShadowColor?: string;
    borderRadius?: string;
    lineHeight?: number;
    fontFamily?: string;
}


export interface NavItem {
    name: string;
    icon?: string;
    path: string;
    subItems?: NavItem[];
}
