import { Icon, Menu } from 'antd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';

const {Item, SubMenu} = Menu;

export function RouterNavigation() {
  const {location} = useReactRouter();
  
  const selectedKeys: string[] = useMemo(() => {
    return [location.pathname];
  }, [location.pathname]);
  
  return (
    <Menu mode="horizontal"
          selectedKeys={selectedKeys}
          style={{lineHeight: '64px'}}>
      <Item key="/">
        <Link to="/">
          <Icon type="home"/>
        </Link>
      </Item>
      
      <SubMenu key="/modules"
               title={(
                 <span>
                   <Icon type="tool"/>
                   <span>Modules</span>
                 </span>
               )}>
        {
          [
            'react-devdoc',
            'react-router-store',
            'use-react-intl',
            'use-locale',
            'use-timezone',
          ].map((name: string) => (
            <Item key={'/modules/' + name}>
              <Link to={'/modules/' + name}>
                {name}
              </Link>
            </Item>
          ))
        }
      </SubMenu>
      
      <SubMenu key="/research"
               title={(
                 <span>
                   <Icon type="experiment"/>
                   <span>Research</span>
                 </span>
               )}>
        {
          [
            'immer',
            'numeral',
          ].map((name: string) => (
            <Item key={'/research/' + name}>
              <Link to={'/research/' + name}>
                {name}
              </Link>
            </Item>
          ))
        }
        
        {
          [
            'immutable',
          ].map((name: string) => (
            <Item key={'/research/' + name}>
              <Link to={'/research/' + name}>
                <s>{name}</s>
              </Link>
            </Item>
          ))
        }
      </SubMenu>
    </Menu>
  );
}