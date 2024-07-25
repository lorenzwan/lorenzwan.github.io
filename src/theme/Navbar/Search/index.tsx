import React from 'react';
import clsx from 'clsx';
import Search from '@theme-original/Navbar/Search';
import type SearchType from '@theme/Navbar/Search';
import type {WrapperProps} from '@docusaurus/types';

import styles from './styles.module.css'

type Props = WrapperProps<typeof SearchType>;

export default function SearchWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className = {clsx(styles.navbar_search_styles)}>
        {props.children}
      </div>
    </>
  );
}
