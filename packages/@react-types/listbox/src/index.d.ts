/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {AriaLabelingProps, AsyncLoadable, CollectionBase, DOMProps, FocusEvents, FocusStrategy, MultipleSelection, SelectionBehavior, StyleProps} from '@react-types/shared';
import {Key, ReactNode} from 'react';

export interface ListBoxProps<T> extends CollectionBase<T>, MultipleSelection, FocusEvents {
  /** Whether to auto focus the listbox or an option. */
  autoFocus?: boolean | FocusStrategy,
  /** Whether focus should wrap around when the end/start is reached. */
  shouldFocusWrap?: boolean
}

interface AriaListBoxPropsBase<T> extends ListBoxProps<T>, DOMProps, AriaLabelingProps {}
export interface AriaListBoxProps<T> extends AriaListBoxPropsBase<T> {
  /**
   * An optional visual label for the listbox.
   */
  label?: ReactNode,
  /** How multiple selection should behave in the collection. */
  selectionBehavior?: SelectionBehavior,
  /**
   * Handler that is called when a user performs an action on an item. The exact user event depends on
   * the collection's `selectionBehavior` prop and the interaction modality.
   */
  onAction?: (key: Key) => void
}

export interface SpectrumListBoxProps<T> extends AriaListBoxPropsBase<T>, AsyncLoadable, StyleProps {
}
