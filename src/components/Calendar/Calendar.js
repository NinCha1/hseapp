import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../../common/Colors';
import styles from './stylesCal';

export default class Calendar extends Component {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    weekDays = [
        "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" 
    ];
    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    state = {
        activeDate: new Date()
    }

    generateMatrix() {
        var matrix = [];
        matrix[0] = this.weekDays;

        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();

        var firstDay = new Date(year, month, 1).getDay();

        var maxDays = this.nDays[month];
        if(month == 1) {
            if (month == 1) {
                if ((year % 4 == 0 && 100 != 0) || year % 400 == 0) {
                    maxDays += 1;
                }
            }
        }

        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for(var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if(row == 1 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }
        return matrix;
    }
    _onPress = (item) => {
        this.setState(() => {
            if (!item.match && item != -1) {
                this.state.activeDate.setDate(item);
                return this.state;
            }
        });
    };

    changeMonth = (n) => {
        this.setState(() => {
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            )
            return this.state
        });
    }
    render() {
        var matrix = this.generateMatrix();
        var rows = [];
        rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                    <View style={{width:26, height: 26, justifyContent: 'center', flexDirection: 'column', borderRadius: 8, display: 'flex', backgroundColor: item == this.state.activeDate.getDate() ? Colors.primary : Colors.addBack, alignItems: 'center'}}>
                        <Text style={{
                            flex: 1,
                            height: 19,
                            width: 16,
                            textAlign: 'center',
                            color : item == this.state.activeDate.getDate() ? Colors.background : Colors.text_prim,
                            fontWeight: '500',
                            // backgroundColor: item == this.state.activeDate.getDate() ? Colors.primary : Colors.addBack,
                            fontFamily: 'Inter',
                            lineHeight: 23,
                            display: 'flex',
                            fontSize: 13,
                            fontStyle: 'normal',
                         }} 
                     onPress={() => this._onPress(item)}>
                            {item != -1 ? item : ''}
                        </Text>
                    </View>
                );
                });
                return (
                    <View style={{flex: 1, flexDirection: 'row', padding: 15, justifyContent: 'space-around', alignItems: 'center'}}>
                        {rowItems}
                    </View>
                );
            });
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.changeMonth(-1)}>
                        <Image source={require('../../../assets/img/leftButton.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.month}>
                        {this.months[this.state.activeDate.getMonth()]} &nbsp;
                        {this.state.activeDate.getFullYear()}
                    </Text>
                    <TouchableOpacity onPress={() => this.changeMonth(+1)}>
                        <Image source={require('../../../assets/img/rightButton.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    {rows}
                </View>
            </View>
        )
    }
}