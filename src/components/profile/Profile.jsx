import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenConstants from '../../navigator/ScreenConstants'
import { Area_Icon, Bag_Icon, Profile_Icon } from '../../res/Icons'
import { height, width } from '../../res/String'

const Profile = () => {
    const navigation = useNavigation();
    const [buttonText, setButtonText] = useState('Trash');

    const handlePress = () => {
        setButtonText(prev => (prev === 'Trash' ? 'Feeds' : 'Trash'));
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>

                {/* USER ICON */}
                <Profile_Icon height={height / 7} width={width / 5} />

                <View style={styles.info}>
                    {/* NAME + EDIT */}
                    <View style={styles.nameRow}>
                        <Text style={styles.userName}>User Name</Text>
                        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate(ScreenConstants.EDIT)}>
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    {/* LOCATION */}
                    <View style={styles.row}>
                        <Area_Icon height={height / 20} width={width / 15} />
                        <Text style={styles.infoText}>City, State</Text>
                    </View>

                    {/* FIELD */}
                    <View style={styles.row}>
                        <Bag_Icon height={height / 30} width={width / 13} />
                        <Text style={styles.infoText}>Field</Text>
                    </View>
                </View>
            </View>

            {/* COUNTS WITH VERTICAL LINES */}
            <View style={styles.countRow}>
                <TouchableOpacity style={styles.editButton} onPress={handlePress}>
                    <Text style={styles.editButtonText}>{buttonText}</Text>
                </TouchableOpacity>

                <View style={styles.countItems}>
                    {renderCount("0", "Feed")}
                    <View style={styles.verticalLine} />
                    {renderCount("0", "Followers")}
                    <View style={styles.verticalLine} />
                    {renderCount("0", "Following")}
                    <View style={styles.verticalLine} />
                    {renderCount("0", "BlockProfile")}
                </View>
            </View>

            {/* ABOUT + BUTTONS */}
            <View style={styles.aboutRow}>
                <Text style={styles.aboutTitle}>About me</Text>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate(ScreenConstants.DRAFT)}>
                        <Text style={styles.editButtonText}>Drafts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate(ScreenConstants.HISTROY)}>
                        <Text style={styles.editButtonText}>History</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* NO POST */}
            <View style={styles.noPostContainer}>
                <Text style={{ fontSize: 15 }}>No Post</Text>
            </View>
        </View>
    )
}

// Helper function to keep render clean
const renderCount = (count, label) => (
    <View style={styles.countItem}>
        <Text style={{ fontWeight: "bold" }}>{count}</Text>
        <Text style={{ marginLeft: 5, fontSize: 11 }}>{label}</Text>
    </View>
)

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        padding: "4%",
    },
    info: {
        marginHorizontal: "5%",
        flex: 1,
    },
    nameRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2,
    },
    infoText: {
        fontSize: 13,
        marginLeft: 5
    },
    editButton: {
        backgroundColor: "#004B49",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
    },
    editButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold'
    },
    countRow: {
        alignItems: "center",
        marginVertical: "2%",
        flexDirection: "row",
    },
    countItems: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "3%",
        marginTop: "2%",
    },
    countItem: {
        flexDirection: "column",
        alignItems: "center",
    },
    verticalLine: {
        width: 1,
        height: 20,
        backgroundColor: "#ccc",
        marginHorizontal: 10
    },
    aboutRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2%"
    },
    aboutTitle: {
        fontSize: 15,
        fontWeight: "bold"
    },
    actionButtons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    noPostContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
