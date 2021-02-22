import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"

export type RootStackParamList = {
  login: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
