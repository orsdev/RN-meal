import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../constants/data.conts"

const CategoriesPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.itemView]}>
                            <Pressable
                                style={({ pressed }) => [styles.itemPressable, {
                                    backgroundColor: item.color
                                }, pressed ? styles.pressedStyle : null]}
                                android_ripple={{
                                    color: '#ccc'
                                }}
                                onPress={() => {
                                    navigation.navigate('overview', {
                                        categoryId: item.id
                                    })
                                }}
                            >
                                <View>
                                    <Text
                                        style={styles.itemText}>{item.title}</Text>
                                </View>
                            </Pressable>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    itemView: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemPressable: {
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000', // IOS only shadow
        shadowOffset: { width: 0, height: 2 }, // IOS only shadow
        shadowRadius: 2, // IOS only shadow
        shadowOpacity: .2, // IOS only shadow
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressedStyle: {
        opacity: .8
    },
    itemText: {
        fontWeight: 'bold'
    }
})

export default CategoriesPage;