import React, { Component } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { endpoints } from '../../services/endpoints';

class JobDetail extends Component {

    token = null;

    deleteClicked = () => {
        console.log('delete click');
        token = this.props.route.params.token;
        job = this.props.route.params.job;
        fetch(`${endpoints.job}${job.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( res => this.props.navigation.navigate('JobList'))
        .catch( error => console.log(error))
    }

    render() {
        job = this.props.route.params.job;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Job Detail </Text>
                </View>
                <View style={{ marginLeft:20, alignItems: 'flex-start' }}>
                    <Text> Name: { job.name } </Text>
                    <Text> Phone: { job.phone } </Text>
                    <Text> Address: { job.address } </Text>
                </View>
                <View style={{ marginTop:50, alignItems:"center"}}>
                    <View style={{ width: '80%'}}>
                        <Button  title="Update"  
                            onPress={() => this.props.navigation.navigate('JobForm', { job: job, view_type: false, token: token })} 
                        />  
                        <Text />
                        <Button  title="Delete"  onPress={this.deleteClicked} />
                        <Text />
                        <Button  title="Go Home"  onPress={() => this.props.navigation.navigate('JobList')} />
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

export default JobDetail;
