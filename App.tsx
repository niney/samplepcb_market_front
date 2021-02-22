import "react-native-gesture-handler"
import React from "react"
import { enableScreens } from "react-native-screens"
import { ApolloProvider } from "@apollo/client"
import client from "./apollo"
import Navigation from "./src/routes/Navigation"

enableScreens()

export default function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  )
}
