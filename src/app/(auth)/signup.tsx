import {useState} from "react";
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const handleSignUp = async () => {
		if(!email || !password){
			Alert.alert("Error", "please fill in all fields")
		}
	}
	const router = useRouter();
	return (
		<SafeAreaView edges={["top", "bottom", "left", "right"]} style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Create Account</Text>
				<Text style={styles.subTitle}>Sign Up to Get Started</Text>			
				<View style={styles.form}>
				 <TextInput 
				 placeholder="Email..." 
				 placeholderTextColor={"#999"} 
				 keyboardType="email-address"
				 autoComplete="email"
				 autoCapitalize="none"
				 value={email}				 
				 onChangeText={setEmail}
				 style= {styles.input}
				 />
				 <TextInput 
				 placeholder="Password" 
				 placeholderTextColor={"#999"} 
				 autoComplete="password"
				 secureTextEntry
				 autoCapitalize="none"
				 value={password}
				 onChangeText={setPassword}
				 style= {styles.input}
				 />
				 <TouchableOpacity style= {styles.button} onPress={handleSignUp}>
				 	<Text style= {styles.buttonText}>Sign up</Text>
				 </TouchableOpacity>
				 <TouchableOpacity style= {styles.linkButton} onPress={() => router.push("/(auth)/login")}>
				 	<Text style= {styles.linkButtonText} >Already have an account? <Text style= {styles.linkButtonTextBold}>Sign In</Text></Text>
				 </TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: "center",
		padding: 24,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 8,
	},
	subTitle: {
		fontSize: 16,
		marginBottom: 32,
		color: "#666",
	},
	form: {
		width: "100%",
	},
	input: {
		backgroundColor: "#f5f5f5",
		borderRadius: 12,
		padding: 16,
		fontSize: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#e0e0e0"
	},
	button: {
		backgroundColor: "#000",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",		
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "600",
	},
	linkButton: {
		marginTop: 24,
		alignItems: "center",
	},
	linkButtonText: {
		color: "#666",
		fontSize: 14,
		
	},
	linkButtonTextBold: {
		fontSize: 14,
		fontWeight: "600",
		color: "#000",
	}
});