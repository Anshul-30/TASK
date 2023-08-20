import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from 'react-native';

import {useSelector} from 'react-redux';
import {imagePath} from '../../constatnts/imagepath';
import strings from '../../constatnts/lang';
import HomeStyle from '../../styles/HomeStyle';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  AddNewTask,
  AllTask,
  DeleteAllTasks,
  DeleteTask,
} from '../../redux/action/taskapis';
import colors from '../../styles/colors';
import Buttoncomp from '../../Components/Buttoncomp';
import {moderateScale} from 'react-native-size-matters';
import {moderateScaleVertical, textScale} from '../../styles/responsiveSize';
import {showMessage} from 'react-native-flash-message';
import TextInputComponent from '../../Components/TextInput';

export const Home = ({navigation}) => {
  const userdata = useSelector(state => state.userState.userdata);
  const [alltask, setAlltask] = useState([]);
  const [task, setTask] = useState();
  const [ismodalvisible, setismodalvisible] = useState(false);
  console.log(userdata?._id);
  useEffect(() => {
    getalltask();
  }, []);

  const getalltask = useCallback(() => {
    AllTask(userdata?._id, {}).then(res => {
      setAlltask(res?.data);
    }),
      [alltask];
  });
  const deletetask = item => {
    console.log(item, 'itemm');
    const query = item?._id;
    DeleteTask(query)
      .then(res => {
        showMessage({
          message: res?.data?.message,
          type: 'success',
        });
        getalltask();
      })
      .catch(error => {
        showMessage({
          message: error?.message || error?.response?.data?.message,
          type: 'danger',
        });
      });
  };

  const addtask = () => {
    const taskdata = {task: task, userId: userdata?._id};
    AddNewTask(taskdata).then(res => {
      showMessage({
        message: res?.data?.message,
        type: 'success',
      });
      setTask('');
      setismodalvisible(false);
      getalltask();
    });
  };
  console.log(alltask, 'alltask');
  const RenderItem = ({item, index}) => {
    return (
      <View style={HomeStyle.taskcontainer}>
        <Text style={{color: colors.white, fontSize: textScale(16)}}>
          {index + 1} : {item?.task}
        </Text>
        <TouchableOpacity onPress={() => deletetask(item)}>
          <Image source={imagePath.ic_cross} />
        </TouchableOpacity>
      </View>
    );
  };
  const taskheader = () => (
    <View style={{marginTop: moderateScale(12)}}>
      <Text style={HomeStyle.mytask}>My Tasks</Text>
    </View>
  );
  const deleteAll = () => {
    DeleteAllTasks(userdata?._id,{})
      .then(res => {
        showMessage({
          message: res?.data?.message,
          type:'success'
        });
        getalltask()
      })
      .catch(error => {
        showMessage({
          message: error?.message || error?.response?.data?.message,
          type:'danger'
        });
      });
  };
  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        <Text style={HomeStyle.header}>To Do List</Text>
        <View style={HomeStyle.topaddbtn}>
          <Buttoncomp
            btntextstyle={{color: colors.white}}
            containerstyle={{
              backgroundColor: colors.green,
              marginRight: moderateScale(10),
            }}
            title={strings.ADD}
            onPress={() => setismodalvisible(true)}
          />
          <Buttoncomp
            btntextstyle={{color: colors.white}}
            containerstyle={{backgroundColor: colors.redB}}
            title={strings.DELETE_ALL}
            onPress={deleteAll}
          />
        </View>
        <FlatList
          data={alltask || []}
          ListHeaderComponent={taskheader}
          renderItem={RenderItem}
        />
      </View>

      <Modal animationType={'slide'} visible={ismodalvisible}>
        <WrapperContainer>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: colors.INPUT_TEXT,
                padding: moderateScale(12),
              }}>
              <Text style={{color: colors.redB, fontSize: textScale(28)}}>
                Add Task
              </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => setismodalvisible(false)}>
                <Image
                  style={{
                    height: moderateScaleVertical(40),
                    width: moderateScale(40),
                  }}
                  source={imagePath.ic_cross}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: moderateScaleVertical(40)}}>
              <TextInputComponent
                placeholder={strings.WRITE_YOUR_TASK_HERE}
                value={task}
                onChangeText={value => setTask(value)}
              />
              <Buttoncomp
                title="Add Task"
                containerstyle={{backgroundColor: colors.redB}}
                btntextstyle={{color: colors.white}}
                onPress={() => addtask()}
              />
            </View>
          </View>
        </WrapperContainer>
      </Modal>
    </WrapperContainer>
  );
};
