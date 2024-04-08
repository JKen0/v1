export type ProjectPagesTypes =
  | 'all'
  | 'katnn-project'
  | 'katc-estimate-position-project'
  | 'chainlink-project';

export type ProjectListType = {
  id: ProjectPagesTypes;
  projectType: string;
  title: string;
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  contributors: string;
  tech_stack: string[];
  key_contributions: string[];
};
