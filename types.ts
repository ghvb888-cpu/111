
export enum AppTab {
  HOME = 'home',
  CAPABILITY = 'capability',
  MANAGEMENT = 'management',
  ANALYSIS = 'analysis',
  PROFILE = 'profile'
}

export interface NavItem {
  id: AppTab;
  label: string;
  icon: string;
}

export interface ModuleItem {
  title: string;
  description: string;
  icon: string;
  color: string;
  path?: string;
}
