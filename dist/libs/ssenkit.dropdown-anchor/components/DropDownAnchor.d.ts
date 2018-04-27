/// <reference types="react" />
import * as React from 'react';
import './DropDownAnchor.scss';
import DropDownAnchorButtonProps from './DropDownAnchorButtonProps';
import DropDownContentProps from './DropDownContentProps';
export interface Props {
    className?: string;
    children: React.ReactElement<DropDownContentProps>;
    button: React.ReactElement<DropDownAnchorButtonProps>;
    useAlternatePosition?: boolean;
    useOutboundClick?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
export interface State {
    open: boolean;
}
export default class  extends React.PureComponent<Props, State> {
    private contentContainerRef;
    private anchorButtonRef;
    private outboundClickSubscription;
    static defaultProps: Partial<Props>;
    constructor(props: Props);
    render(): JSX.Element;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    updateContentContainerPosition(): void;
    subscribeOutboundClick: () => void;
    unsubscribeOutboundClick: () => void;
    outboundClickHandler: (event: MouseEvent) => void;
    openerOpenHandler: (event: React.MouseEvent<HTMLElement>) => void;
    openerCloseHandler: (event: React.MouseEvent<HTMLElement>) => void;
    openContentContainer(): void;
    closeContentContainer(): void;
    close: () => void;
}
