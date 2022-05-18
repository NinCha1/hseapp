import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.background,
      },
      item: {
        padding: 10,
        flexDirection: 'row',
        margin: (24, 0),
        height: 105,
      },
      header: {
        fontSize: 16,
        color: Colors.text_tret,
        fontFamily: 'Inter',
        fontWeight: '500',
        margin: (0, 10),
        lineHeight: 19,
        marginTop: 40,
      },
      timeCont: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 0,
          width: 40,
      },
      timeStart: {
          margin: (0, 0),
          color: Colors.text_prim,
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: 19,
          fontSize: 16,
          fontStyle: 'normal',
      },
      timeEnd: {
          marginBottom: 0,
          color: Colors.text_second,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
      },
      delimeter: {
          width: 2,
          height: '100%',
        //   border: '2px solid #1F4EC7',
          boxSizing: 'border-box',
        marginLeft: 8,
        marginRight: 12,
        backgroundColor: Colors.text_tret,

      },
      icon: {
          padding: 0,
          margin : 0,
      },
      infoCont: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxSizing: 'border-box',
          height: '100%',
          justifyContent: 'space-between'
      },
      type: {
          color: Colors.primary,
        //   marginBottom: 8,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
          marginBottom: 5,
      },
      subjectName: {
          color: Colors.text_prim,
          fontFamily: 'Inter',
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 19,
          fontStyle: 'normal',
          marginBottom: 5,
      },
      visitType: {
          color: Colors.text_second,
          marginBottom: 5,
          fontWeight: '400',
          fontSize: 14,
          lineHeight: 21,
          fontStyle: 'normal',
          fontFamily: 'Inter',
          marginBottom: 5,
      },
      components: {
          width: '20%',
      }
});