import React from "react"
import {
  useWindowDimensions,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { StackNavigationProp } from "@react-navigation/stack"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
})

export type StackParamList = {
  Home: undefined
  Notifications: undefined
}

interface Props {
  navigation: StackNavigationProp<StackParamList>
}

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app! - samplepcb-market
        frontend test
      </Text>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  )
}

function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default (): React.ReactElement => {
  const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}
