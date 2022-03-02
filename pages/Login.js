import { View, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

export default function Login() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text
					style={{
						textAlign: "center",
						fontSize: 40,
						fontWeight: "bold",
					}}
				>
					You are logged in!
				</Text>

				<TouchableOpacity onPress={handleClick}>
					<Text> Log out </Text>
				</TouchableOpacity>
			</View>

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
})