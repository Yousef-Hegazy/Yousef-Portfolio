
export interface TechStackModel {
 frontend: string[];
 backend: string[];
}

export interface Project {
    name: string,
    description: string,
    demoLink?: string,
    github?: string,
    images: string[];
    techStack: TechStackModel;
}