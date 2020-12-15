import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firebase from 'react-native-firebase';

export default class Login extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('CustoDraw'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <ScrollView style={{ padding: '10%',  }} >
        <View style={{ marginTop: '15%', marginBottom: '15%',}} >
        <View>
          <Image
            style={{ resizeMode: 'contain', alignSelf: "center", width: "60%" }}
            source={require('./images/Logo.png')} />
          <View style={{ margin: '8%' }} />
          <Text
            style={{ fontSize: 27, textAlign: 'center', fontWeight: 'bold' }}>
            LOGIN
          </Text>
          <View style={{ margin: '5%' }} />

          <TextInput
            placeholder="Email"
            autoCompleteType="email"
            value={this.state.username}
            placeholderTextColor="#444444"
            onChangeText={text => this.setState({ username: text })}
            style={{ paddingHorizontal: 13, backgroundColor: "#EDEDED" , borderRadius: 4,  }}
          />
          <View style={{ margin: 10 }} />

          <View style={{ flexDirection: 'row',  borderRadius: 4,    }}>
            <View style={{ width: '80%' }} >
              <TextInput
                placeholder="Password"
                autoCompleteType="password"
                value={this.state.password}
                secureTextEntry={!this.state.showPassword}
                placeholderTextColor="#444444"
                onChangeText={text => this.setState({ password: text })}
                style={{ 
                  paddingHorizontal: 13, 
                  backgroundColor: "#EDEDED", 
                  borderTopLeftRadius: 4, 
                  borderBottomLeftRadius:4,  }}
              />
            </View>

            <View 
              style={{ 
                flex:1, 
                justifyContent: 'center',
                alignItems: 'center', 
                backgroundColor: "#EDEDED", 
                borderBottomRightRadius: 4, 
                borderTopRightRadius: 4}} >

              <TouchableOpacity style={{   width: '20%', }}
                onPress={() => {
                  debugger
                  this.setState({ showPassword: !this.state.showPassword });
                }}>
                <Image
                  style={{ width: 20, height: 20, backgroundColor: "#EDEDED", alignSelf: 'center',  }}
                  resizeMode='contain' 
                  source={
                    this.state.showPassword ? (
                      require('./images/eye.png')
                    ) : (
                        require('./images/eye-off.png')
                      )
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ margin: 10 }} />
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <CheckBox
            />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ color: '#444444', paddingTop: 5, fontSize: 15, }}>
                Remember me
                </Text>
              <Text 
                onPress={() => { this.props.navigation.navigate('Link') }} 
                style={{ color: '#444444', paddingTop: 5, fontSize: 15, }} >
                Forgot Password ?
              </Text>
            </View>
          </View>
          <View style={{ margin: 17 }} />
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={() => { this.handleLogin()}} >
              <Text style={styles.text}>
                Login
                  </Text>
            </TouchableOpacity>
          </View>

          {/*  <Button
            onPress={() => {
              if (
                this.state.password === 'Admin' &&
                this.state.username === 'Admin'
              ) {
                this.props.navigation.navigate('Link');
              } else {
                alert('  ❌  Wrong Data ');
              }
            }}
            title="Log in"
            color="#444444"
          /> */}

        </View>
        <View style={{ margin: 15 }} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
          <Text style={{ color: '#444444', fontSize: 16, paddingEnd: 7 }}>
            Don't have an account?
          </Text>
          <Text 
            onPress={() => { this.props.navigation.navigate('Signup') }} 
            style={{ color: '#444444', fontWeight: 'bold', fontSize: 16 }} >
            Sign Up Now
          </Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#444444',
    padding: 14,
    borderRadius: 4,
  },
})