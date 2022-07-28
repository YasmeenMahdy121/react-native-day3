import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";

export default function AddToDoForm(props) {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask({
          value,
          completeTask:false
        });
        setTask(null);
    }

    return (
        <View style={styles.container}>
           <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
          <TouchableOpacity onPress={() => handleAddTask(task)}>
            <View style={styles.button}>
                Add
            </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        alignSelf:'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 45,
        flex: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#411530',
    },
    button: {
        height: 45,
        borderRadius: 12,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginStart:10
    },
});