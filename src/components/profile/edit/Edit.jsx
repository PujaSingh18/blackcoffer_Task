import React, { useState } from 'react'
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { updateProfile } from '../../../res'
import { Camera_Icon } from '../../../res/Icons'
import { height, width } from '../../../res/String'

const Edit = () => {
    const [gender, setGender] = useState('');
    const [genderModalVisible, setGenderModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.imageContainer}>
                    <Image style={styles.img} source={updateProfile()} />
                    <TouchableOpacity style={styles.cameraIconContainer}>
                        <Camera_Icon height={height / 18} width={width / 18} />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Name</Text>
                    <TextInput placeholder='Enter Your Name' style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Gender</Text>
                    <TouchableOpacity
                        style={[styles.input, { justifyContent: 'center' }]}
                        onPress={() => setGenderModalVisible(true)}
                    >
                        <Text style={{ color: gender ? '#000' : '#666' }}>
                            {gender || 'Select your Gender'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Location</Text>
                    <TextInput placeholder='Enter Your Location' style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Profession</Text>
                    <TextInput placeholder='Enter Your Profession' style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Bio</Text>
                    <TextInput
                        placeholder='Enter Your Bio'
                        style={[styles.input, styles.bioInput]}
                        multiline
                        numberOfLines={4}
                    />
                </View>

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Gender Modal */}
            <Modal
                visible={genderModalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setGenderModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Gender</Text>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => { setGender('Male'); setGenderModalVisible(false); }}
                        >
                            <Text>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => { setGender('Female'); setGenderModalVisible(false); }}
                        >
                            <Text>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.modalOption, { borderTopWidth: 0 }]}
                            onPress={() => setGenderModalVisible(false)}
                        >
                            <Text style={{ color: 'red' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Edit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    imageContainer: {
        // marginTop: 20,
        width: width * 0.95,
        height: height / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        borderRadius: 10
    },
    cameraIconContainer: {
        position: 'absolute',
        end: 5,
        bottom: 5,
        // backgroundColor: '#ffffffdd',
        // borderRadius: 20,
        // padding: 1,
        // elevation: 4
    },
    inputContainer: {
        width: '90%',
        marginVertical: 8
    },
    textInput: {
        color: "lightgray",
        fontWeight: "600",
        marginBottom: 4
    },
    input: {
        borderRadius: 10,
        backgroundColor: "lightgray",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    bioInput: {
        height: 100,
        textAlignVertical: 'top'
    },
    submitButton: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#004B49",
        marginTop: 20,
        alignItems: "center",
        width: width * 0.6,
        paddingVertical: 12
    },
    submitText: {
        fontSize: 14,
        color: "white"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalOption: {
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: '#ccc'
    }
})
