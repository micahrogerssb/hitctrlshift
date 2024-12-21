import type { ToolCategory } from './types';
import { toolkitTools } from './toolkit';
import { protestTools } from './protest';
import { securityTools } from './security';
import { communityTools } from './community';

export const toolCategories: ToolCategory[] = [
  {
    name: "CtrlShift Tools",
    tools: toolkitTools
  },
  {
    name: "Protest & Direct Action",
    tools: protestTools
  },
  {
    name: "Digital Security",
    tools: securityTools
  },
  {
    name: "Community Organizing",
    tools: communityTools
  }
];