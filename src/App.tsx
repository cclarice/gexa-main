import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '@/components/menu/Menu'

const StyledAppMain = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  flex: 1 1 0;
`

const AppMain = (props: any) => {
  return <StyledAppMain {...props}>
    <header>
      { props.children }
    </header>
    <main>
      { props.activeTabName }
    </main>
  </StyledAppMain>
}

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
`

export type Tab = Array<{ id: number, name: string, icon: string }>

const App = (props: any) => {
  const [tabs] = useState<Tab>([
    {
      id:   0,
      name: 'Чаты',
      icon: 'assets/menu/icons/chat.svg'
    },
    {
      id:   1,
      name: 'Задачи',
      icon: 'assets/menu/icons/task.svg'
    },
    {
      id:   2,
      name: 'Коллеги',
      icon: 'assets/menu/icons/users.svg'
    },
    {
      id:   3,
      name: 'Профиль',
      icon: 'assets/menu/icons/profile.svg'
    }
  ])
  const [activeTabId, setActiveTabId] = useState<number>(0)

  return <StyledApp>
    <AppMain {...props} activeTabName={ tabs[activeTabId].name }/>
    <Menu tabs={ tabs }
          activeTabId={ activeTabId }
          setActiveTabId={ setActiveTabId }/>
  </StyledApp>
}

export default App
