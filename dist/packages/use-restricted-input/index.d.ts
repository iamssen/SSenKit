import { KeyboardEvent } from 'react';
export interface RestrictedInputReturn {
    onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}
export default function useRestrictedInput(availableCharacters: ((character: string) => boolean) | string): RestrictedInputReturn;
