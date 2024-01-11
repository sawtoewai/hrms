import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class EmployeeForm extends Component {

    state = {
        editedEmployee: null
    }

    inputChanged = (name, value) => {
        console.log('input change', name, value);
        employee = this.props.route.params.employee;
        employee[name] = value;
        this.setState({ editedEmployee: employee });
    }

    save = () => {
        console.log('save click');
        token = this.props.route.params.token;
        fetch(endpoints.employee, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editedEmployee)
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('EmployeeDetail', {  
            employee: this.state.editedEmployee
        })  
        )
        .catch( error => console.log(error))
    }  
        
    update = () => {
        console.log('update click');
        token = this.props.route.params.token;
        employee = this.props.route.params.employee;
        fetch(`${endpoints.employee}${employee.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(
                this.state.editedEmployee
            )
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('EmployeeDetail', {  
            employee: this.state.editedEmployee
        }))
        .catch( error => console.log(error))
    }

    render() {
        employee = this.props.route.params.employee;
        view_type = this.props.route.params.view_type;

        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}> Employee Form </Text>
                </View>

                <TextInput 
                    style={styles.inputText} 
                    value={employee.name} 
                    onChangeText={value => this.inputChanged('name', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={employee.phone} 
                    onChangeText={value => this.inputChanged('phone', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={employee.address} 
                    onChangeText={value => this.inputChanged('address', value)}
                    />
                
                <View style={{ width: '80%'}}>
                    {
                        view_type ? <Button onPress={this.save} title="Save" /> : <Button onPress={this.update} title="Update" />
                    }
                </View>
                <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('EmployeeList')} />
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

export default EmployeeForm;
