import { SingleAutoCompleteTextInput } from 'ssenkit.autocomplete-text-input';
import * as React from 'react';
import './SingleAutoCompleteTextInput.sample.scss';

const availableTags: string[] = [
  'ActionScript',
  'AppleScript',
  'Asp',
  'BASIC',
  'C',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme',
];

function split(val: string): string[] {
  return val.split(/,\s*/);
}

function extractLast(term: string): string {
  return split(term).pop() || '';
}

function source(request: {term: string}, response: (data: object) => void) {
  response($.ui.autocomplete.filter(availableTags, extractLast(request.term)));
}

interface State {
  text: string;
}

export default class extends React.PureComponent<{}, State> {
  state: State = {
    text: '',
  };
  
  render() {
    return (
      <div>
        <SingleAutoCompleteTextInput menuClassName="SingleAutoCompleteTextInputSample-menu"
                                     className="SingleAutoCompleteTextInputSample-input"
                                     value={this.state.text}
                                     minLength={0}
                                     source={source}
                                     onChange={this.onChange}
                                     onSubmit={this.onChange}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
  
  onChange = (text: string) => {
    console.log('SingleAutoCompleteTextInput.sample.tsx..onChange()', text);
    this.setState({text});
  };
}