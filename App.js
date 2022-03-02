import { SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
	return (
		<SafeAreaView>
			<NativeRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
				</Routes>
			</NativeRouter>
		</SafeAreaView>
	);
}