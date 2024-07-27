export {}

declare global {
  export namespace Types {
    export namespace Event {
      export interface Meeting {
        id: number;
        title: string;
        startDateTime: string;
        link: string;
      }
    }
    export namespace Template {
      export interface BodyItem {
        img: string;
        title: string;
        paragraph: string;
        textButton: string;
      }
      export interface HeaderItem {
        title: string;
        link: string;
      }
    }
  }
}


