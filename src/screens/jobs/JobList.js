import React, { Component } from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endpoints } from '../../services/endpoints';

class JobList extends Component {

    token = null;

    state = {
        jobs: [],
        isRefreshing: false
    }

    onRefresh = () => {
        this.setState({ isRefreshing: true});
        this.componentDidMount();
        this.setState({ isRefreshing: false});
    }

    async componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            // user has navigated to this screen or away from use didBlur
            console.log('didFocus call');
            this.onRefresh();
        });

        console.log('componentDidMount call');
        token = await AsyncStorage.getItem('hrms-token');
        fetch(endpoints.job, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( resp => resp.json())
        .then( res => this.setState({jobs: res}))
        .catch( error => console.log(error))
    }

    jobClicked = job => {
        this.props.navigation.navigate('JobDetail', { job: job, token: token });  
    }

    addNewClicked = () => {
        let newjob = {
            'name': '',
            'phone': '',
            'address': ''
        };
        this.props.navigation.navigate('JobForm', {  job: newjob, view_type: true, token: token });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom:20, height: 100, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Job List </Text>
                </View>
                <FlatList 
                    data={this.state.jobs}
                    renderItem={({item, index}) => (
                        <Text onPress={() => this.jobClicked(item)} style={[
                            { padding: 10, fontSize: 18, height: 44,backgroundColor: 'white', flex: 1 }, 
                            index % 2 == 0 ? { backgroundColor: '#D3D3D3' } : { backgroundColor: 'white' } 
                        ]}>
                            {item.name}
                        </Text> 
                    )}
                    onRefresh={this.onRefresh}
                    refreshing={this.state.isRefreshing}
                />
                <FloatingAction onPressMain={this.addNewClicked}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44
    },  
})  

export default JobList;
