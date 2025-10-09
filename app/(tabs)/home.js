import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.userName}>{user?.name}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📦 Você está autenticado!</Text>
          <Text style={styles.cardText}>
            Esta é uma rota privada protegida pelo Expo Router. Você só consegue
            acessar esta tela porque fez login com sucesso.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 Recursos Implementados:</Text>
          <Text style={styles.infoText}>• Expo Router (navegação interna)</Text>
          <Text style={styles.infoText}>
            • AsyncStorage (persistência de dados)
          </Text>
          <Text style={styles.infoItem}>Rotas privadas autenticadas</Text>
          <Text style={styles.infoItem}>Cadastro de usuários</Text>
          <Text style={styles.infoItem}>Login persistente</Text>
          <Text style={styles.infoItem}>Validação de dados</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Dica:</Text>
          <Text style={styles.tipText}>
            Seus dados ficam salvos mesmo se você fechar o app! Use o botão
            "Sair" no perfil para fazer logout.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  emoji: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  userName: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  card: {
    backgroundColor: '#e8f5e8',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#be1773ff',
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#64003eff',
  },
  infoCard: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1565c0',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#0d47a1',
  },
  infoItem: {
    fontSize: 14,
    marginBottom: 5,
    color: '#0d47a1',
  },
  tipCard: {
    backgroundColor: '#fff3e0',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#f12a2aff',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9e4897ff',
  },
  tipText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#bf0c42ff',
  },
});