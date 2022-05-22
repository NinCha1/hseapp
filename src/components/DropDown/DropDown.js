import React, {FC, useState, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, Modal, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const Dropdown = ({label, data, onSelect}) => {
    console.log(data)
    const DropdownButton = useRef();
    const [dropdownTop, setDropdownTop] = useState(0);
    const DropdownIcon = require('../../img/dropdown.png')
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);

    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = () => {
        // DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        //     setDropdownTop(py + h);
        // });
        setVisible(true);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
            <Text style={{color: 'black'}}>{item.label}</Text>
        </TouchableOpacity>
    )

    const onItemPress = (item) => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    }

    const renderDropdown = () => {
        if (visible) {
            return (
                    <TouchableOpacity 
                        style={{padding: (0, 0, 0, 16), width: 150, backgroundColor: '#F5F5F5', border: 2, borderColor: ' rgba(0, 0, 0, 0.08)', borderRadius: 8, flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => setVisible(false)}
                    >
                        <View>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                />
                        </View>
                    </TouchableOpacity>
            );
        }
    };

    return (
        <TouchableOpacity onPress={toggleDropdown}>
            <View style={{padding: (0, 0, 0, 16), width: 150, height: 48, backgroundColor: '#F5F5F5', border: 2, borderColor: ' rgba(0, 0, 0, 0.08)', borderRadius: 8, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'black'}}> {(selected && selected.label) || label}</Text>
                <Image source={DropdownIcon}/>
            </View>
            {renderDropdown()}
        </TouchableOpacity>
    );
}

export default Dropdown;
