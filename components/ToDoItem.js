import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ToDoItem (props) {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={props.task.completeTask?{...styles.task,textDecorationLine: 'line-through'}:styles.task}>{props.task.value}</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => props.completeTask()}>
                    <FontAwesome style={styles.check} name={props.task.completeTask?"check-circle":"check-circle-o"} size={18} color='#fff' />
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <FontAwesome style={styles.delete} name="trash-o" size={18} color='#fff' />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#411530',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#411530',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
        color:'#fff'
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});