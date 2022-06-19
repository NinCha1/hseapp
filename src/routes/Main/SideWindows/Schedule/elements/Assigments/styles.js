import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.background,
        width: '100%',
      },
      item: {
        padding: 10,
        flexDirection: 'row',
        margin: (24, 0),
        width: 242,
        height: 95,
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
      content: {
        justifyContent: 'space-between',
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

      subjectName: {
          fontFamily: 'Inter',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 15,
          color: Colors.primary,
      },
      assigmentName: {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontSize: 16,
          lineHeight: 19,
          color: Colors.text_prim,
      },
      infoView: {
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          // padding: (2, 2),
        //   width: 78,
          height: 29,
      },
      deadlineTime: {
         fontFamily: 'Inter',
         fontStyle: 'normal',
         fontSize: 14,
         color: Colors.text_prim,
         padding: 8,
        //  margin: (0, 8),
      },
      submissionTIme: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 14,
        color: Colors.text_prim,
        padding: 8,
      },
      infoCont: {
          flexDirection: 'row',
        //   alignContent: 'space-between'
      },
      components: {
          width: '20%',
      }
});