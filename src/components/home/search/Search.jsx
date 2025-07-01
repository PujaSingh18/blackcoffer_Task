import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Category_Icon, Location_Icon, Person_Icon, TLogo_Icon } from '../../../res/Icons'
import { height, width } from '../../../res/String'

const Search = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Browser</Text>
            <View style={styles.line} />

            <TouchableOpacity style={styles.content}>
                <TLogo_Icon height={height / 10} width={width / 13} />
                <Text style={styles.text}>
                    Title of the video{"\n"}Breaking news, Big news
                </Text>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={styles.content1}>
                <Location_Icon height={height / 10} width={width / 13} />
                <Text style={styles.text}>
                    Location of the video{"\n"}Bangalore, Mumbai, Delhi
                </Text>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={styles.content}>
                <Person_Icon height={height / 10} width={width / 13} />
                <Text style={styles.text}>
                    Uploader of the video{"\n"}John Doe, Sam Alex, Ria
                </Text>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity style={styles.content}>
                <Category_Icon height={height / 10} width={width / 13} />
                <Text style={styles.text}>
                    Category of the video{"\n"}Lifestyle, News, Tech
                </Text>
            </TouchableOpacity>
            <View style={styles.line} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: "400",
        marginHorizontal: "2%",
        marginTop: "2%"
    },
    line: {
        height: 1,
        backgroundColor: '#ccc',
        width: '96%',
        alignSelf: 'center',
        // marginVertical: 10,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "2%",
        // marginVertical: 5,
    },
    content1: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "2%",
        // marginVertical: 5,
    },
    text: {
        fontSize: 15,
        marginLeft: 20,
        color: '#333'
    }
});
