import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    availableCharacterPattern: RegExp;
    children?: JSX.Element;
}
interface InternalProps {
}
interface State {
}
declare class Component extends React.PureComponent<Props & InternalProps, State> {
    static displayName: string;
    private inputRef;
    static defaultProps: Partial<Props>;
    render(): React.ReactElement<any>;
    onChange: (event: React.ChangeEvent<{
        value: string;
    }>) => void;
    onKeyPress: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    onKeyDown: (event: React.KeyboardEvent<{
        value: string;
    }>) => void;
    componentDidUpdate(): void;
    text: string;
}
export default Component;
