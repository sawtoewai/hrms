import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class DepartmentDetail extends Component {

    token = null;

    deleteClicked = () => {
        console.log('delete click');
        token = this.props.route.params.token;
        department = this.props.route.params.department;
        fetch(`${endpoints.department}${department.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( res => this.props.navigation.navigate('DepartmentList'))
        .catch( error => console.log(error))
    }

    render() {
        department = this.props.route.params.department;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Department Detail </Text>
                </View>
                <View style={{ marginLeft:20, alignItems: 'flex-start' }}>
                <Text> Name: { department.name } </Text>
                    <Text> Rank: { department.rank } </Text>
                    <Text> Total Employee: { department.total_employee } </Text>
                </View>
                <View style={{ marginTop:50, alignItems:"center"}}>
                    <View style={{ width: '80%'}}>
                        <Button  title="Update"  
                            onPress={() => this.props.navigation.navigate('DepartmentForm', { department: department, view_type: false, token: token })} 
                        />  
                        <Text />
                        <Button  title="Delete"  onPress={this.deleteClicked} />
                        <Text />
                        <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('DepartmentList')} />
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

export default DepartmentDetail;
