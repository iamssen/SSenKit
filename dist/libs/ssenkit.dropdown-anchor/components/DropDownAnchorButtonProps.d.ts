import * as React from 'react';
export default interface DropDownAnchorButtonProps {
    role?: string;
    ['aria-expanded']?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
