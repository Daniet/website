export interface ISocialNetwork {
  url: string;
  ref: string;
  img: string;
  name: string;
  from: boolean;
}

export interface ISocial {
  instagram: string;
  linkedin: string;
  telegram: string;
  whatsapp: string;
}

export interface IContacUsScreen {
  markdown: string;
  social: ISocial;
}

export interface IMsg {
  name: string;
  subject: string;
  msg: string;
}

export interface ITextField {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}

export interface ISeccionHome {
  markdown: string;
}

export interface IJob {
  company: string;
  img: string;
  markdown: string;
  extra: any;
}
