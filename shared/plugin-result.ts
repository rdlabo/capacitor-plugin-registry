export type PluginResult = {
  name: string;
  npmPackageName: string;
  description: string;
  keywords: string[];
  license: string;
  lastUpdated: string;
  githubUrl: string | undefined;
  platforms: string[];
  author: { name: string; email?: string };
  type: PluginType;
  health: {
    score: number;
    modifiers: string[];
  };
  stats: {
    downloads: number;
    downloadsStart: string | undefined;
    downloadsEnd: string | undefined;
    downloadsPeriod: string | undefined;
    stars?: number;
    watchers: number;
    openIssues: number;
  };
};

export type PluginType = 'official' | 'community';
