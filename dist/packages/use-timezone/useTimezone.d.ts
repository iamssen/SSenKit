import { Timezone } from './timezone';
export interface Result {
    timezone: Timezone;
    updateTimezone: (timezone: string | Timezone) => void;
}
export declare function useTimezone(currentTimezone: string, cookieKey?: string): Result;
