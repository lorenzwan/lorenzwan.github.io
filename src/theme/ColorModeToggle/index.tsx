import React from 'react';
import clsx from 'clsx';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';

import styles from './styles.module.css'

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className = {clsx(styles.color_mode_toggle_styles)}>
        <ColorModeToggle {...props} />
      </div>
    </>
  );
}
