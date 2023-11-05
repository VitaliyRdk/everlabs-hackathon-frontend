import React, { useState } from "react"
import { CreateButton, ScrollableContainer, Tab, TabsContainer } from "./styles"
import { ModalContainer } from "../react-portal/ReactPortal"

const Tabs = ({ data, handleOnClick, activeTab, handleCreateFolder }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <TabsContainer>
      <ScrollableContainer>
        <Tab active={activeTab === "all"} onClick={() => handleOnClick("all")}>
          All audios
        </Tab>
        {data.map((item: any) => {
          return (
            <Tab
              active={activeTab === item.id}
              key={`tab-${item.id}`}
              onClick={() => handleOnClick(item.id)}
            >
              {item.name} ({item.audios_count})
            </Tab>
          )
        })}
      </ScrollableContainer>
      <CreateButton onClick={() => setOpen(true)}>Create folder</CreateButton>
      {open && (
        <ModalContainer
          setData={handleCreateFolder}
          setOpen={setOpen}
          title="Create folder"
          subtitle="Create a new folder for your Audio Library section. Once created, you'll be able to organize and group audio files within these folders, making it more convenient to manage and access your audio resources."
          primaryButtonText="Create"
          secondaryButtonText="Cancel"
        />
      )}
    </TabsContainer>
  )
}

export default Tabs
