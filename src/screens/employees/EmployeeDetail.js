import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class EmployeeDetail extends Component {

    token = null;

    deleteClicked = () => {
        console.log('delete click');
        token = this.props.route.params.token;
        employee = this.props.route.params.employee;
        fetch(`${endpoints.employee}${employee.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( res => this.props.navigation.navigate('EmployeeList'))
        .catch( error => console.log(error))
    }

    render() {
        employee = this.props.route.params.employee;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Employee Detail </Text>
                </View>
                <View style={{ marginLeft:20, alignItems: 'flex-start' }}>
                    <Text> Name: { employee.name } </Text>
                    <Text> Phone: { employee.phone } </Text>
                    <Text> Address: { employee.address } </Text>
                </View>
                <View style={{ marginTop:50, alignItems:"center"}}>
                    <View style={{ width: '80%'}}>
                        <Button  title="Update"  
                            onPress={() => this.props.navigation.navigate('EmployeeForm', { employee: employee, view_type: false, token: token })} 
                        />  
                        <Text />
                        <Button  title="Delete"  onPress={this.deleteClicked} />
                        <Text />
                        <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('EmployeeList')} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    }
});

export default EmployeeDetail;
