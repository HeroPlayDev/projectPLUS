import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

//import Utils from "./utils/index"

export default class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { name: "Dashboard", routeName: "DashboardScr", icon: require("./components/image/Dashboard.png"), selected: true },
        { name: "Jobs", routeName: "JobsScr", icon: require("./components/image/Job.png"), selected: false },
        { name: "InviteUser", routeName: "InviteUserScr", icon: require("./components/image/User-Customer.png"), selected: false },
        { name: "Customers", routeName: "CustomersScr", icon: require("./components/image/User-Customer.png"), selected: false },
        { name: "Estimates", routeName: "EstimatesScr", icon: require("./components/image/Estimate.png"), selected: false },
        { name: "Scan", routeName: "ScanScr", icon: require("./components/image/Scan.png"), selected: false },
        { name: "Settings", routeName: "SettingsScr", icon: require("./components/image/Setting.png"), selected: false },
        { name: "Pricing", routeName: "PricingScr", icon: require("./components/image/Pricing.png"), selected: false },
        { name: "Logout", routeName: "LogoutScr", icon: require("./components/image/Logout.png"), selected: false },
      ],
    };
  }




  styleForMenu = item => {
    let menustyle = {
      height: '7%',
      //   height: Utils.MethodUtils.increaseSize(50),
      flexDirection: "row",
      alignItems: "center",
      //     backgroundColor: item.selected ? Config.Constant.COLOR_BORDER : Config.Constant.COLOR_WHITE,
      //    borderColor: Config.Constant.COLOR_BORDER,
      //   borderTopWidth: Utils.MethodUtils.increaseSize(1)
    };
    return menustyle;
  };

  cancelLogoutTapped = () => {
    this.setState({ logoutDialogVisible: false });
  };

  logoutTapped = () => {
    this.setState({ logoutDialogVisible: false }, () => this.props.navigation.navigate("Auth"));
  };

  //<DrawerItems {...this.props} />
  render() {

    return (


      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView style={styles.scrollview}>

          {/* ---  Logo --- */}
          {/*   <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.profileImage} source={require("../../assets/images/digitize-Items.png")} /> */}


          <Image
            style={{ resizeMode: 'contain', alignSelf: 'flex-start', width: 130 }}
            source={require('../images/Logo.png')} />

          {/* ---  Items --- */}
          <View style={styles.itemsContainer}>
            {this.state.menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.closeDrawer();

                    if (item.routeName === "logout") {
                      this.setState({ logoutDialogVisible: true });
                    } else {
                      this.props.navigation.navigate(item.routeName);
                    }
                  }}
                  key={index}
                  style={this.styleForMenu(item)}
                >
                  <Image
                    style={{ resizeMode: 'contain', alignSelf: 'flex-start', width: 20 }}
                    //source={require('../images/Logo.png')}
                    source={item.icon} 
                    />

                  {/*   <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.itemImage} source={item.icon} /> */}
                  <Text style={styles.itemNameText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

        </ScrollView>

        {/* ---  Logo --- */}
        {/* <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.profileImage} source={require("../../assets/images/digitize-Items.png")} /> */}
        <Image
            style={{ resizeMode: 'contain', alignSelf: 'flex-start', width: "30%" }}
            source={require('../images/Logo.png')} />


        {/* ---  Version --- */}
        <Text style={styles.versionText}>{"Ver Dev-1.0(1)"}</Text>

      </SafeAreaView>
    );
  }





  /*     render() {
          return (
                <ScrollView style={{ flex: 1 }}>
            {
              this.state.menus.map((menu) => (
                <TouchableOpacity key={menu.key} onPress={() => this.navigate.Dashboard(menuItems.screen)}>
                  <Text>{menu.title}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          );
      } */
}

const styles = StyleSheet.create({
  versionText: {
    //   fontSize: Utils.MethodUtils.increaseSize(15),
    //   color: Config.Constant.COLOR_TEXT_BLACK_LIGHT,
    //  marginLeft: Utils.MethodUtils.increaseSize(16),
    fontWeight: "400",
    //    fontFamily: Config.Constant.FONT_HEL_LIGHT,
    // marginBottom: Utils.MethodUtils.increaseSize(20),
    alignSelf: 'center',
    textAlign: 'center'
  },
  itemNameText: {
    //  fontSize: Utils.MethodUtils.increaseSize(15),
    //  color: Config.Constant.COLOR_BLACK,
    //  marginLeft: Utils.MethodUtils.increaseSize(16),
    fontWeight: "400"
  },
  /*   itemImage: {
            width: Utils.MethodUtils.increaseSize(20),
          height: Utils.MethodUtils.increaseSize(20),
          marginLeft: Utils.MethodUtils.increaseSize(24)
      }, */
  itemsContainer: {
    //  marginTop: Utils.MethodUtils.increaseSize(10),
    width: "100%"
  },
  companyText: {
    //  fontSize: Utils.MethodUtils.increaseSize(12),
    //   color: Config.Constant.COLOR_BLACK,
    //   marginTop: Utils.MethodUtils.increaseSize(2),
    fontWeight: "300"
  },
  nameText: {
    //  fontSize: Utils.MethodUtils.increaseSize(16),
    //   color: Config.Constant.COLOR_BLACK,
    //  marginTop: Utils.MethodUtils.increaseSize(8)
  },
  profileImage: {
    width: "70%",
    //    height: Utils.MethodUtils.increaseSize(80),
    //    marginTop: Utils.MethodUtils.increaseSize(8),
    alignSelf: 'center'
  },
  accountText: {
    //    fontSize: Utils.MethodUtils.increaseSize(16),
    //   color: Config.Constant.COLOR_BLACK
  },
  scrollview: {
    //    backgroundColor: Config.Constant.COLOR_WHITE,
    
    width: '40%',
    // justifyContent:'flex-start',
    height: '100%',
    
  },
  container: {
    flex: 1,
    alignItems: "center",
    //    marginTop: Utils.MethodUtils.increaseSize(8),
    //     backgroundColor: Config.Constant.COLOR_WHITE,
  },
});


