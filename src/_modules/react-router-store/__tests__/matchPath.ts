import { matchPath } from 'react-router-dom';

describe('react-router-store', () => {
  it('Test matchPath()', () => {
    expect(matchPath('/test/123', {
      path: '/test/:id',
    })).toBeTruthy();
    
    expect(matchPath('/test/xxx?a=34&b=23', {
      path: '/test/xxx',
    })).toBeFalsy();
  });
});