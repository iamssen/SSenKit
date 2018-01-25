import * as React from 'react';

export interface Props {
  menuClassName?: string;
  className?: string;
  
  value?: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  
  minLength?: number;
  source: (request: {term: string}, response: (data: object) => void) => void;
  children?: JSX.Element;
}

export default class extends React.Component<Props, {}> {
  private input: HTMLInputElement;
  private lastDisaptchedText: string = '';
  
  static defaultProps: Partial<Props> = {
    minLength: 2,
    children: <input type="text"/>,
  };
  
  render() {
    return React.cloneElement(this.props.children, {
      ref: r => this.input = r,
      defaultValue: this.props.value,
      onChange: this.onInputChange,
      onKeyDown: this.onInputSubmit,
    });
  }
  
  componentDidMount() {
    const self: this = this;
    
    const options: JQueryUI.AutocompleteOptions = {
      minLength: this.props.minLength,
      source: this.props.source,
      focus: () => {
        // prevent value inserted on focus
        return false;
      },
      select: function (event: Event, ui: JQueryUI.AutocompleteUIParams) {
        self.dispatchChange(ui.item.value);
        return false;
      },
      change: this.onBlur,
    };
    
    const hasInputClassName: boolean = typeof this.props.className === 'string';
    const hasMenuClassName: boolean = typeof this.props.menuClassName === 'string';
    
    if (hasInputClassName || hasMenuClassName) {
      const classes: object = {};
      if (hasInputClassName) classes['ui-autocomplete-input'] = this.props.className;
      if (hasMenuClassName) classes['ui-autocomplete'] = this.props.menuClassName;
      options['classes'] = classes;
    }
    
    $(this.input)
      .on('keydown', event => {
        if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete('instance').menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete(options);
  }
  
  onInputChange = (event: React.KeyboardEvent<{value: string}>) => {
    this.dispatchChange(event.currentTarget.value);
  };
  
  onInputSubmit = (event: React.KeyboardEvent<{value: string}>) => {
    if (event.keyCode === 13) {
      this.props.onSubmit(event.currentTarget.value);
    }
  };
  
  onBlur = (event: Event) => {
    this.dispatchChange(event.currentTarget['value']);
  };
  
  dispatchChange = (text: string) => {
    if (this.lastDisaptchedText !== text) {
      this.props.onChange(text);
      this.lastDisaptchedText = text;
    }
  };
  
  componentWillReceiveProps(nextProps: Readonly<Props>) {
    if (this.input.value !== nextProps.value) {
      this.input.value = nextProps.value;
    }
  }
}