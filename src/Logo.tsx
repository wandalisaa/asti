/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {
  chakra,
  ImageProps,
  forwardRef,
} from '@chakra-ui/react';
import logo from './logo.svg';

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => <chakra.img src={logo} ref={ref} {...props} />);
