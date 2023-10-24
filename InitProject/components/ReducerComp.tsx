import {useReducer} from 'react';
import {Text, TextInput, View} from 'react-native';

function reducer(
  state: {first: string; last: string},
  action: {type: string; value: string},
): {first: string; last: string} {
  switch (action.type) {
    case 'first':
      return {...state, first: action.value};
    case 'last':
      return {...state, last: action.value};
    default:
      return state;
  }
}

export default function ReducerComp() {
  const [state, dispatch] = useReducer(reducer, {first: '', last: ''});

  return (
    <View>
      <TextInput
        style={{fontSize: 32}}
        placeholder="First"
        value={state.first}
        onChangeText={text => dispatch({type: 'first', value: text})}
      />
      <TextInput
        style={{fontSize: 32}}
        placeholder="Last"
        value={state.last}
        onChangeText={text => {
          dispatch({type: 'last', value: text});
        }}
      />
      <Text style={{fontSize: 32}}>
        {state.first} {state.last}
      </Text>
    </View>
  );
}
