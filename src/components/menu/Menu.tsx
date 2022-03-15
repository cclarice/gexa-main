import React from 'react'
import styled from 'styled-components'
import { Tab } from '@/App'

const StyledPlus = styled.div<{ color?: string }>`
  // position: absolute;
  order: 1;
  align-self: flex-end;
  width: 75px;
  height: 75px;
  flex: 0 0 75px;
  background-image: url("assets/menu/plus.svg");
  background-position: center;
  background-size: 75px 75px;
  filter: drop-shadow(0px 0px 10px #2F80ED);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

const StyledMenu = styled.div<{ [key in 'background' | 'border']?: string }>`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: 77px;
  padding: 11px 0 17px;
  background-color: ${ props => props.background || props.theme.colors.background };
  box-shadow: 0px -0.5px 0px ${ props => props.border || props.theme.colors.border };
`

const StyledTabs = styled.div<{  }>`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  position: relative;
`

const StyledTab = styled.div<{ active: boolean, order: number }>`
  display: flex;
  align-items: center;
  flex-flow: column;
  min-width: 64px;
  padding: 2px 0 1px;
  order: ${ props => props.order };
  cursor: pointer;
  filter: ${ props => props.active ? 'brightness(100%) grayscale(0%)' : 'brightness(83.5%) grayscale(100%)'};
  transition: filter .2s;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    filter: ${ props => props.active ? 'brightness(100%) grayscale(0%)' : 'brightness(95.875%) grayscale(25%)'};
  }
  
  & img {
    width: 32px;
    height: 32px;
  }
  
  & span {
    font-family: -apple-system, 'SF Pro Text', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #636366;
  }
`

interface MenuProps {
  tabs: Tab
  activeTabId: number
  setActiveTabId: React.Dispatch<React.SetStateAction<number>>
  background?: string
  color?: string
}

const Menu = (props: MenuProps) => {
  return (
  <StyledMenu background={props.background}>
    <StyledTabs { ...props }>
      <StyledPlus color={props.color}/>
      {
        props.tabs.map((tab, index, tabs) =>
          <StyledTab key={ tab.id }
                     active={ tab.id === props.activeTabId }
                     order={ index < tabs.length / 2 ? 0 : 2 }
                     onClick={ () => props.setActiveTabId(tab.id) }>
            <img src={tab.icon} alt={tab.name}/>
            <span>{tab.name}</span>
          </StyledTab>
        )
      }
    </StyledTabs>
  </StyledMenu>
  )
}

export default Menu
