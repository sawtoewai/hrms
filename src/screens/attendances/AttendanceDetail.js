import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class AttendanceDetail extends Component {

    token = null;

    deleteClicked = () => {
        console.log('delete click');
        token = this.props.route.params.token;
        attendance = this.props.route.params.attendance;
        fetch(`${endpoints.attendance}${attendance.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( res => this.props.navigation.navigate('AttendanceList'))
        .catch( error => console.log(error))
    }

    render() {
        attendance = this.props.route.params.attendance;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Attendance Detail </Text>
                </View>
                <View style={{ marginLeft:20, alignItems: 'flex-start' }}>
                    <Text> Name: { attendance.name } </Text>
                    <Text> Check In: { attendance.check_in } </Text>
                    <Text> Check Out: { attendance.check_out } </Text>
                </View>
                <View style={{ marginTop:50, alignItems:"center"}}>
                    <View style={{ width: '80%'}}>
                        <Button  title="Update"  
                            onPress={() => this.props.navigation.navigate('AttendanceForm', { attendance: attendance, view_type: false, token: token })} 
                        />  
                        <Text />
                        <Button  title="Delete"  onPress={this.deleteClicked} />
                        <Text />
                        <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('AttendanceList')} />
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

export default AttendanceDetail;
