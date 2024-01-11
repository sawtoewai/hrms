import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class AttendanceForm extends Component {

    state = {
        editedAttendance: null
    }

    inputChanged = (name, value) => {
        console.log('input change', name, value);
        attendance = this.props.route.params.attendance;
        attendance[name] = value;
        this.setState({ editedAttendance: attendance });
    }

    save = () => {
        console.log('save click');
        token = this.props.route.params.token;
        fetch(endpoints.attendance, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editedAttendance)
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('AttendanceDetail', {  
            attendance: this.state.editedAttendance
        })  
        )
        .catch( error => console.log(error))
    }  
        
    update = () => {
        console.log('update click');
        token = this.props.route.params.token;
        attendance = this.props.route.params.attendance;
        fetch(`${endpoints.attendance}${attendance.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(
                this.state.editedAttendance
            )
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('AttendanceDetail', {  
            attendance: this.state.editedAttendance
        }))
        .catch( error => console.log(error))
    }

    render() {
        attendance = this.props.route.params.attendance;
        view_type = this.props.route.params.view_type;

        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}> Attendance Form </Text>
                </View>

                <TextInput 
                    style={styles.inputText} 
                    value={attendance.name} 
                    onChangeText={value => this.inputChanged('name', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={attendance.check_in} 
                    onChangeText={value => this.inputChanged('check_in', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={attendance.check_out} 
                    onChangeText={value => this.inputChanged('check_out', value)}
                    />
                
                <View style={{ width: '80%'}}>
                    {
                        view_type ? <Button onPress={this.save} title="Save" /> : <Button onPress={this.update} title="Update" />
                    }
                </View>
                <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('AttendanceList')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    inputText: {
      height: 50,
      padding: 10,
      height: 45,
      width: "80%",
      borderRadius: 10,
      marginBottom: 20,
      borderColor: 'blue', 
      borderWidth: 1
    },
});

export default AttendanceForm;
