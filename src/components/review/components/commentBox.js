import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { Icon } from "react-native-elements";


const CommentBox = () => {
    return (
        <View style={{ width: '85%' }}>
            <Text style={{ fontFamily: 'ProximaNovaSemiBold', fontSize: 16 }}>Comments</Text>
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    
                />
            </View>
        </View>

    );
};
export { CommentBox };

const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: 'lightgray',
        borderStyle: "dashed",
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
        marginVertical: 10
    },
    textArea: {
        textAlignVertical: 'top'
    }
});
