import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

type Item = {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("1");

  const addItem = () => {
    if (itemName.trim() && parseInt(itemQuantity) > 0) {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: Math.random().toString(),
          name: itemName,
          quantity: parseInt(itemQuantity),
          purchased: false,
        },
      ]);
      setItemName("");
      setItemQuantity("1");
    }
  };

  const togglePurchased = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const ItemComponent = ({ item }: { item: Item }) => (
    <View style={[styles.itemContainer, item.purchased && styles.purchasedItem]}>
      <Text style={[styles.itemText, item.purchased && styles.itemTextPurchased]}>
        {item.name} (x{item.quantity})
      </Text>
      <TouchableOpacity
        style={[styles.purchaseButton, item.purchased && styles.purchasedButton]}
        onPress={() => togglePurchased(item.id)}
      >
        <Text style={styles.purchaseButtonText}>
          {item.purchased ? "Desmarcar" : "Comprar"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Produtos</Text>
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome do item</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome do item"
                placeholderTextColor="#888"
                value={itemName}
                onChangeText={setItemName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Quantidade</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a quantidade"
                placeholderTextColor="#888"
                value={itemQuantity}
                keyboardType="number-pad"
                onChangeText={setItemQuantity}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>+ Adicionar item na lista</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Lista de Compras</Text>
        {items.length === 0 ? (
          <Text style={styles.emptyMessage}>Não tem nenhum item na lista</Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemComponent item={item} />}
            contentContainerStyle={[
              styles.listContainer,
              items.length === 0 && styles.emptyList,
            ]}
            style={styles.list}
            showsVerticalScrollIndicator={false} 
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  row: {
    flexDirection: "row", 
    justifyContent: "space-between", 
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputGroup: {
    flex: 1, 
    marginRight: 8, 
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
    marginLeft: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10, 
  },
  addButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  list: {
    flex: 1, 
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 20, 
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  itemTextPurchased: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  purchasedItem: {
    backgroundColor: "#e0e0e0",
  },
  purchaseButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  purchaseButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  purchasedButton: {
    backgroundColor: "#FF5722",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    color: "#777",
    fontStyle: "italic",
    marginTop: 10,
  },
});
