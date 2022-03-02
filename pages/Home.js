import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [errors, setErrors] = useState(false);
  const [toggle, setToogle] = useState(false);

  const handleToggle = () => {
    setToogle((prev) => !prev);
  };

//   const handleSubmit = () => {
//     const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
// 	if (!strongRegex.test(email) && password.length > 6 ) {
// 		setValidation();
// 	} else {
// 		setErrors(true)
// 	}
//   };


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Your password"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />

        <View style={styles.remember}>
          <Text> Remember me? </Text>
          <Switch value={toggle} onValueChange={handleToggle} />
        </View>

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={styles.send}> Send </Text>
        </TouchableOpacity>
      </View>

	  {/* <View style={styles.error}>
		<Text style={styles.errorText}>{error}</Text>
	  </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
    marginTop: 10,
  },
  remember: {
    marginTop: 10,
  },
  submit: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "blue",
    width: 80,
    marginTop: 10,
  },
  send: {
    color: "white",
    textAlign: "center",
  },
});
