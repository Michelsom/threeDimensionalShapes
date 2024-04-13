import {useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';

export const controllerInput = () => {
  const [showPass, setShowPass] = useState(true);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<TextInput>();

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        inputRef.current?.blur();
      },
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return {
    showPass,
    setShowPass,
    focus,
    setFocus,
  };
};
