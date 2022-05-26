import React, {Component} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Colors from '../../common/Colors';
import styles from '../Filter/styles';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.filter
    }

    _choosen(selectedItem) {
        this.setState({selectedItem});
        this.props.HandleFilter({filter: selectedItem});
    }

    _renderList = ({item}) => {
        const isSelected = (this.state.selectedItem === item.id);
        const backgroundColor = isSelected ? 'rgba(31, 78, 199, 0.15)' : Colors.addBack;
        const fontWeight = isSelected ? "bold" : "normal";
        const showNext = isSelected ? "block" : "none";
        const colortext = isSelected ? Colors.primary : Colors.text_prim;

        return (
            <TouchableOpacity
                onPress={() => this._choosen(item.id)}
                underlayColor={"#ffffff"}
            >
                <View style={{padding: 2, flexDirection: 'row', width: '100%'}}>
                    <View style={{backgroundColor, width: '100%', height: 30, borderRadius: 8, justifyContent:'center'}}>
                        <Text style={{marginLeft: 10, fontSize: 16, color: colortext}}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{marginTop: 0, width: '100%'}}
                    data={this.state.subjCategory}
                    renderItem={this._renderList}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}