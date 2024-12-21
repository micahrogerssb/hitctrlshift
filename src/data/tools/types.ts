export interface Tool {
  name: string;
  description: string;
  href: string;
  icon: string;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}