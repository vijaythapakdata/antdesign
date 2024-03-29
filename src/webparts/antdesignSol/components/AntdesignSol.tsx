import * as React from 'react';
// import styles from './AntdesignSol.module.scss';
import type { IAntdesignSolProps } from './IAntdesignSolProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import MyCalendar from './FullCalendar';

export default class AntdesignSol extends React.Component<IAntdesignSolProps, {}> {
  public render(): React.ReactElement<IAntdesignSolProps> {
   
    return (
      <>
      <MyCalendar/>
      </>
    );
  }
}
