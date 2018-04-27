import * as React from 'react';

function split(val: string): string[] {
  return val.split(/,\s*/);
}

export interface Props {
  menuClassName?: string;
  className?: string;
  
  value?: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  
  minLength?: number;
  source: (request: {term: string}, response: (data: object) => void) => void;
  children?: React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
}

export default class extends React.PureComponent<Props, {}> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  private lastDisaptchedText: string = '';
  
  static defaultProps: Partial<Props> = {
    minLength: 2,
    children: <input type="text"/>,
  };
  
  render() {
    return React.cloneElement(this.props.children as JSX.Element, {
      ref: this.inputRef,
      defaultValue: this.props.value,
      onChange: this.onInputChange,
      onKeyDown: this.onInputSubmit,
    });
  }
  
  componentDidMount() {
    if (!this.inputRef.current) return;
    
    const self: this = this;
    
    const options: JQueryUI.AutocompleteOptions = {
      minLength: this.props.minLength,
      source: this.props.source,
      focus: () => {
        // prevent value inserted on focus
        return false;
      },
      select: function (event: Event, ui: JQueryUI.AutocompleteUIParams) {
        const terms: string[] = split(this.value);
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push(ui.item.value);
        // add placeholder to get the comma-and-space at the end
        terms.push('');
        this.value = terms.join(', ');
        
        self.dispatchChange(this.value);
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
    
    $(this.inputRef.current)
      .on('keydown', event => {
        if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete('instance').menu.active) {
          event.preventDefault();
        }
      })
      .autocomplete(options);
  }
  
  componentDidUpdate() {
    if (this.inputRef.current && this.inputRef.current.value !== this.props.value) {
      this.inputRef.current.value = this.props.value || '';
    }
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
    if (event.currentTarget && typeof event.currentTarget['value'] === 'string') {
      this.dispatchChange(event.currentTarget['value']);
    }
  };
  
  dispatchChange = (text: string) => {
    if (this.lastDisaptchedText !== text) {
      this.props.onChange(text);
      this.lastDisaptchedText = text;
    }
  };
}