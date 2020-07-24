import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';

export default (props: TabsProps) => {
  const { tabsContent, tabsLabels } = props;
  const [value, setValue] = React.useState<number>(0);
  const classes = useStyles()();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const renderTabsLabels = (tabsLabels: string[]) => {
    return tabsLabels.map((tabLabel, index) => {
      return <Tab label={tabLabel} key={`tab${index}`} />;
    });
  };

  const renderTabsContent = (tabsContent: any[]) => {
    return tabsContent.map((tabContent, index) => {
      return <div key={`tab-content-${index}`}>{tabContent}</div>;
    });
  };

  return (
    <Paper id="tabs-container" classes={{ root: classes.container }}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        classes={{ root: classes.tab, indicator: classes.indicator }}>
        {renderTabsLabels(tabsLabels)}
      </Tabs>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {renderTabsContent(tabsContent)}
      </SwipeableViews>
    </Paper>
  );
};

interface TabsProps {
  tabsContent: any[];
  tabsLabels: string[];
}

const useStyles = () =>
  makeStyles(() => {
    return {
      container: {
        width: '100%',
        height: '100%',
        '& .react-swipeable-view-container > div': {
          maxHeight: '90%',
          overflow: 'hidden !important',
        },
      },
      tab: {
        backgroundColor: 'white',
      },
      indicator: {
        backgroundColor: '#004aad',
      },
    };
  });
