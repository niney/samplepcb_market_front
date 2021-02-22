import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Drawer from "./Drawer"

const Stack = createStackNavigator()

export default (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Drawer" component={Drawer} />
  </Stack.Navigator>
)
