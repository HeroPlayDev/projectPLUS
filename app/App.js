import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './containers/LoginPage';
import LinkPage from './containers/LinkPage';
import SignupPage from './containers/SignUpPage';
import BusinessDetailPage from './containers/BusinessDetailPage';
import MainPage from './containers/MainPage';
/* import SideNavigation from './containers/SideNavigation'; */
// import App from './containers/del/App';
import DrawerNavigator from './containers/SideNavigation/DrawerNavigator';
import ScreenTwo from './containers/SideNavigation/ScreenTwo';
import CustomDrawer from './containers/SideNavigation/CustomDrawer'


const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainPage},
    Login: { screen: LoginPage},
    Link: { screen: LinkPage},
    Signup: { screen: SignupPage},
    BusinessDetail: { screen: BusinessDetailPage },
   /*  SideNav: { screen: SideNavigation}, */
    DrawerNav: { screen: DrawerNavigator},
    CustoDraw: { screen: CustomDrawer},
    // Appjs: { screen: App},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);

export default createAppContainer(AppNavigator);