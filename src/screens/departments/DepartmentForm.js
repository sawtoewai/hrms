import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class DepartmentForm extends Component {

    state = {
        editedDepartment: null
    }

    inputChanged = (name, value) => {
        console.log('input change', name, value);
        department = this.props.route.params.department;
        department[name] = value;
        this.setState({ editedDepartment: department });
    }

    save = () => {
        console.log('save click');
        token = this.props.route.params.token;
        fetch(endpoints.department, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editedDepartment)
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('DepartmentDetail', {  
            department: this.state.editedDepartment
        })  
        )
        .catch( error => console.log(error))
    }  
        
    update = () => {
        console.log('update click');
        token = this.props.route.params.token;
        department = this.props.route.params.department;
        fetch(`${endpoints.department}${department.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(
                this.state.editedDepartment
            )
        }).then( resp => resp.json())
        .then( res => this.props.navigation.navigate('DepartmentDetail', {  
            department: this.state.editedDepartment
        }))
        .catch( error => console.log(error))
    }

    render() {
        department = this.props.route.params.department;
        view_type = this.props.route.params.view_type;

        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20}}> Department Form </Text>
                </View>

                <TextInput 
                    style={styles.inputText} 
                    value={department.name} 
                    onChangeText={value => this.inputChanged('name', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={department.rank} 
                    onChangeText={value => this.inputChanged('rank', value)}
                    />

                <TextInput 
                    style={styles.inputText} 
                    value={department.total_employee} 
                    onChangeText={value => this.inputChanged('total_employee', value)}
                    />
                
                <View style={{ width: '80%'}}>
                    {
                        view_type ? <Button onPress={this.save} title="Save" /> : <Button onPress={this.update} title="Update" />
                    }
                </View>
                <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('DepartmentList')} />
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

export default DepartmentForm;
