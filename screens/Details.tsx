import { ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../constants/data.conts";
import { useLayoutEffect } from "react";
import { Image } from "expo-image";
import { FontAwesome } from '@expo/vector-icons';
import { blurhash } from "./Overview";

const DetailsPage = ({ route, navigation }) => {
    const { mealId } = route?.params;

    const selectedMeal = MEALS.find(item => item.id.includes(mealId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title ?? ''
        })
    }, []);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingVertical: 10,
                paddingHorizontal: 10,
            }}
        >
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.image}
                    source={selectedMeal?.imageUrl}
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                />
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: 10
                }}>
                    <Text style={[styles.info, styles.capitalized]}>{selectedMeal.complexity}</Text>
                    <View style={styles.divider} />
                    <Text style={styles.info}>{selectedMeal.duration} mins</Text>
                </View>
                <Text style={styles.heading}>Ingredients</Text>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 5,
                    marginTop: 5
                }}>

                    {selectedMeal?.ingredients?.map((item, index) => (
                        <View key={index} style={styles.pill}>
                            <Text style={[styles.info, {
                                color: 'white',
                                fontSize: 13
                            }]}>
                                {item}
                            </Text>
                        </View>
                    ))
                    }
                </View>
            </View>

            <View style={{
                flex: 1
            }}>
                <Text style={styles.heading}>Steps</Text>
                <View
                    style={{
                        marginTop: 5,
                        gap: 20,
                        paddingBottom: 25
                    }}
                >
                    {selectedMeal?.steps?.map((item, index) => (
                        <View key={index} style={{
                            flexDirection: 'row',
                            gap: 4,
                            alignItems: 'flex-start'
                        }}>
                            <FontAwesome name="dot-circle-o" size={14} color="black" />
                            <Text style={[styles.info, {
                                fontSize: 13,
                                textAlign: 'left',
                                lineHeight: 20,
                            }]}>
                                {item}
                            </Text>
                        </View>
                    ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8
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
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 5,
        fontSize: 17
    },
    pill: {
        borderRadius: 8,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#a7a6bc',
    }
})

export default DetailsPage;