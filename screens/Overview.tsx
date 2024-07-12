import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../constants/data.conts";
// import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect } from "react";

export const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const OverviewPage = ({ route, navigation }) => {
    //TODO: Alternate
    // const route = useRoute() 
    const { categoryId } = route?.params;

    const selectedMeal = MEALS.filter(item => item.categoryIds.includes(categoryId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find(cat => cat.id === categoryId)?.title ?? ''
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={selectedMeal}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    const { item } = itemData;
                    return (
                        <View style={styles.listWrapper}>
                            <Pressable
                                style={({ pressed }) => [styles.itemPressable, pressed ? styles.pressedStyle : null]}
                                android_ripple={{
                                    color: '#ccc'
                                }}
                                onPress={() => {
                                    navigation.navigate('details', {
                                        mealId: item.id
                                    })
                                }}
                            >
                                <Image
                                    style={styles.image}
                                    source={item?.imageUrl}
                                    placeholder={{ blurhash }}
                                    contentFit="cover"
                                    transition={1000}
                                />

                            </Pressable>
                            <Text style={styles.title}> {item?.title}</Text>
                            <View style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                                gap: 5
                            }}>
                                <Text style={[styles.info, styles.capitalized]}>{item.complexity}</Text>
                                <View style={styles.divider} />
                                <Text style={styles.info}>{item.duration} mins</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    listWrapper: {
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: "bold",
        textAlign: 'center'
    },
    divider: {
        borderColor: '#a7a6ba',
        borderWidth: 1
    },
    info: {
        textAlign: 'center'
    },
    capitalized: {
        textTransform: 'capitalize'
    },
    itemPressable: {
        shadowColor: '#000', // IOS only shadow
        shadowOffset: { width: 0, height: 2 }, // IOS only shadow
        shadowRadius: 2, // IOS only shadow
        shadowOpacity: .5, // IOS only shadow
        width: 250,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressedStyle: {
        opacity: .8
    },
});

export default OverviewPage;