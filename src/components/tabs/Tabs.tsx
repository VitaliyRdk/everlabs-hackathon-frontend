import React, { useState } from "react"
import { CreateButton, Tab, TabsContainer } from "./styles"

const Tabs = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState(data[0].id)
  debugger
  const handleOnClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <TabsContainer>
      {data.map((item: any) => {
        return (
          <Tab
            active={activeTab === item.id}
            key={`tab-${item.id}`}
            onClick={() => handleOnClick(item.id)}
          >
            {item.name}
          </Tab>
        )
      })}
      <CreateButton>Create folder</CreateButton>
    </TabsContainer>
  )
}

export default Tabs
