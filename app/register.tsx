import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigation } from "expo-router";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { ThemedText } from "@/components/ThemedText";
// import app from '../firebaseConfig';

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser)
    }, [auth.currentUser]);
    useEffect(() => {
        console.log(email, pass, confirmPass)
    }, [email,pass, confirmPass]);

    const register = () => {
        if(pass === confirmPass){
            createUserWithEmailAndPassword(auth, email, pass)
            .then((dadosUsuario) => {
                console.log(dadosUsuario);
                Alert.alert("Cadastrado com sucesso!");
            }).catch((err) => {
                alert(err.message); // Melhor exibir a mensagem de erro
            });
        }
        else{
            Alert.alert("ERRO!");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                onChangeText={setConfirmPass}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text>Já possui uma conta?</Text>
                <Link href="/" style={styles.link}>Logar</Link>
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