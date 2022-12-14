import React from "react";
import { Stack } from "@mui/material";
import { AccordionContent } from "./AccordionContent";
import { DefaultContent } from "./DefaultContent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {
  value: number;
};

const tabPanelIcons = [
  <AccordionContent />,
  <DefaultContent />,
  <DefaultContent />,
  <DefaultContent />,
  <DefaultContent />,
  <DefaultContent />,
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack flexGrow={1} paddingRight={2}>
          {children}
        </Stack>
      )}
    </div>
  );
}

export const TabPanelPart: React.FC<Props> = ({ value }) => {
  return (
    <>
      {tabPanelIcons.map((icon, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {icon}
          </TabPanel>
        );
      })}
    </>
  );
};
