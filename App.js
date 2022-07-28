import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AddToDoForm from './components/AddToDoForm';
import ToDoItem from './components/ToDoItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.value == null) return;
    setTasks([...tasks, task]);
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((task, index) => index != deleteIndex));
  }
  const completeTask = (completeIndex) => {
    setTasks(tasks.map((task, index) => {
      if(index == completeIndex){
        if(task.completeTask){
          return {...task,completeTask:false}
        }else{
          return {...task,completeTask:true}
        }
      }
      else{
        return {...task}
      }
    }));
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <ToDoItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} completeTask={() => completeTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <AddToDoForm addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1512D',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});