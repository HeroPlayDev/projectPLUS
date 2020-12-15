import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LinkPage from '../screen/LinkPage';
import MainPage from '../screen/MainPage';
import LoginPage from '../screen/LoginPage';
import SignupPage from '../screen/SignUpPage';
import LoginBusinessPage from '../screen/Login-BusinessPage';
import BusinessDetailPage from '../screen/BusinessDetailPage';
import SignupBusinessPage from '../screen/SignUp-BusinessPage';
import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import MainDrawerNavigator from '../navigator/MainDrawerNavigator';
/* import SideNavigation from '../screen/SideNavigation'; */
// import App from '../screen/del/App';
/* import DrawerNavigator from '../navigator/DrawerNavigator'; */
/* import ScreenTwo from '../screen/SideNavigation/ScreenTwo'; */
/* import CustomDrawer from '../navigator/CustomDrawer'; */


const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainPage },
    Link: { screen: LinkPage },
    Login: { screen: LoginPage },
    Signup: { screen: SignupPage },
    Dashboard: { screen: DashboardScreen },
    LoginBusiness: { screen: LoginBusinessPage },
    MainDrawNav: { screen: MainDrawerNavigator },
    SignupBusiness: { screen: SignupBusinessPage },
    BusinessDetail: { screen: BusinessDetailPage },

    // SideNav: { screen: SideNavigation },
    // DrawerNav: { screen: DrawerNavigator },
    // CustoDraw: { screen: CustomDrawer },
    // Appjs: { screen: App },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);