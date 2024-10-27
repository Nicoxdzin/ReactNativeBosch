import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigation } from "expo-router";
import { FIREBASE_AUTH } from "@/firebaseConfig";
// import app from '../firebaseConfig';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser)
    }, [auth.currentUser]);
    useEffect(() => {
        console.log(email, pass)
    }, [email,pass]);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            router.push('/(tabs)')
        }).catch((err) => {
            alert(err.message); // Melhor exibir a mensagem de erro
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setPass}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text>Não tem uma conta? </Text>
                <Link href="/register" style={styles.link}>Cadastrar</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        borderColor: '#4b6beb',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4b6beb',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    link: {
        color: '#4b6beb',
    },
});