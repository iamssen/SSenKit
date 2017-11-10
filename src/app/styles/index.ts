import * as _env from '!!sass-variable-loader!./env.scss';
import './bulma.scss';

interface Env {
  hello: string;
  xxx: string;
}

export const env: Env = _env as Env;