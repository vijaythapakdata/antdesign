import {MSGraphClientV3} from '@microsoft/sp-http';
export interface IGraphPersonaProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  graphClient:MSGraphClientV3;
}
