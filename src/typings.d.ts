/// <reference path="react"/>

// tslint:disable:no-any
declare module '*.ejs' {
  const content: string;
  export = content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.json' {
  const content: any;
  export = content;
}

declare module '*.svg' {
  const content: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export = content;
}

declare module 'react-lowlight' {
  const component: React.ComponentType<{ language: string, value: string, inline: boolean }> & { registerLanguage: (language: string, data: any) => void };
  export = component;
}

interface Window {
  __INITIAL_STATE__: any;
}