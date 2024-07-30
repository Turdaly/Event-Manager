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
      export type TypeEvent =
        | "online-meeting"
        | "offline-meeting"
        | "webinar"
        | "livestream";
      export interface MyEvent {
        id: string;
        email: string;
        title: string;
        color: string;
        type: TypeEvent;
        isComplete: boolean;
        startTime: string;
        startDate: string;
        link_address: string;
      }
      export interface TicketEvent {
        id: string;
        name: string;
        dates: {
          start: {
            localDate: string;
            localTime?: string;
            timeTBA?: boolean;
          };
        };
        _embedded: {
          venues: {
            city: {
              name: string;
            };
            state: {
              stateCode: string;
            };
            name: string;
          }[];
        };
      }
      export interface Attribute {
        dates: string;
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
