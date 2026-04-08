/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import ansiEscapes from 'ansi-escapes';
import type { Dispatch, SetStateAction } from 'react';

export interface RefreshStaticOptions {
  clearTerminal?: boolean;
}

export function refreshStatic(
  stdout: { write: (data: string) => void },
  setHistoryRemountKey: Dispatch<SetStateAction<number>>,
  options: RefreshStaticOptions = {},
): void {
  if (options.clearTerminal !== false) {
    stdout.write(ansiEscapes.clearTerminal);
  }

  setHistoryRemountKey((prev) => prev + 1);
}
