import { storesContext } from "../RootStore";
import React, { useEffect, useState } from 'react';

export const useRootStore = () => React.useContext(storesContext)