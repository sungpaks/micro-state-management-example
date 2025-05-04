import { useState } from "react";
import createStateContext from "./createStateContext";

const useNumberState = (init?: number) => useState(init || 0);

const [Count1Provider, useCount1] = createStateContext(useNumberState);
const [Count2Provider, useCount2] = createStateContext(useNumberState);
const [Count3Provider, useCount3] = createStateContext(useNumberState);

export { Count1Provider, useCount1, Count2Provider, useCount2, Count3Provider, useCount3 };
