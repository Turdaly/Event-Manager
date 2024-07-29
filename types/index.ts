import type { JwtPayload } from "jwt-decode";
export {};

declare global {
  export namespace Types {
    export interface CustomUser {
      id: string;
      name: string;
      email: string;
      pasword: string;
    }
    export namespace Event {
      export interface MyEvent {
        id: number;
        title: string;
        isComplete: boolean;
        dates: number;
        color: string;
        startDateTime: string;
        link_address: string;
      }

      export interface Attribute {
        dates: number;
        highlight: {
          style: {
            backgroundColor: string;
          };
          class?: string;
        };
        popover: {
          label: string;
        };
      }
    }
    export namespace Template {
      export interface BodyItem {
        img: string;
        title: string;
        paragraph: string;
        textButton: string;
        link: string;
      }
      export interface HeaderItem {
        title: string;
        link: string;
      }
      export interface Day {
        date: Date;
        events: any[];
        [key: string]: any;
      }
    }
    export namespace Utils {
      export type JwtToken = JwtPayload & {
        azp: string;
        email: string;
        email_verified: boolean;
        name: string;
        picture: string;
        given_name: string;
      };
    }
  }
}
