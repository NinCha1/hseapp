import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Calendar extends Component {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    weekDays = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" 
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
    render() {
        var matrix = this.generateMatrix();
        var rows = [];
        rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                    <Text style={{
                        flex: 1,
                        height: 18,
                        textAlign: 'center',
                        backgroundColor: rowIndex === 0 ? '#ddd' : '#fff',
                        color : colIndex == 0 ? '#a00' : '#000',
                        fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
                    }} 
                    onPress={() => this._onPress(item)}>
                        {item != 1 ? item : ''}
                    </Text>
                );
                });
                return (
                    <View style={{flex: 1, flexDirection: 'row', padding: 15, justifyContent: 'space-around', alignItems: 'center'}}>
                        {rowItems}
                    </View>
                );
            });
        return(
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                 }}>
                    {this.months[this.state.activeDate.getMonth()]} &nbsp;
                    {this.state.activeDate.getFullYear()}
                </Text>
                {rows}
            </View>
        )
    }
}