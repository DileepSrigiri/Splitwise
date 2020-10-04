import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

//two options signin or signup
//inputs for email and password
const Login = ({ navigation }) => {

    const users = '{"Users":[' +
        '{"email":"srigiridileep.8@gmail.com","password":"Dileep" },' +
        '{"email":"srigiridileep.88@gmail.com","password":"Vivek" },' +
        '{"email":"srigiridileep.95@gmail.com","password":"Tab" }]}';
        
    var usersData = JSON.parse(users);

    const [data, setData] = React.useState({
        email: "",
        password: ""
    });


    const isAValidUser = ()=> {
        for(i=0;i<usersData.Users.length;i++) {
            if(usersData.Users[i].email == data.email && usersData.Users[i].password == data.password) {
                navigation.navigate('Profile', {name:data.email})
            }
        }
        navigation.navigate('Profile', {name: data.email})
    }
    return (
        <View >
            <TextInput
                placeholder="Email..."
                placeholderTextColor="#003f5c"
                onChangeText={text => setData({ email: text })}
                value = {data.email} />

            <TextInput
                placeholder="Password..."
                placeholderTextColor="#003f5c"
                secureTextEntry
                onChangeText={text => setData({ password: text })}
                value = {data.password} />

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Button onPress ={isAValidUser} title = "LOGIN"/>
            </TouchableOpacity>


        </View>





    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});