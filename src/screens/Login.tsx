import { gql, useMutation } from "@apollo/client"
import React, { useState } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"

export const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`

export default (): React.ReactElement => {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")

  const onCompleted = (data) => {
    const {
      login: { ok, token, error },
    } = data
    if (ok && token) {
      console.log(ok, token)
    } else {
      console.log(ok, error)
    }
  }

  const [loginMutation, { data, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  })
  const onSubmit = () => {
    loginMutation({
      variables: {
        loginInput: {
          userId,
          password,
        },
      },
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Login</Text>
        <View style={styles.formInput}>
          <Text>아이디</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserId(text)}
            value={userId}
          />
        </View>
        <View style={styles.formInput}>
          <Text>비밀번호</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Button title={"로그인"} onPress={onSubmit} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formInput: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  input: {
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
})
