import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectFrontmatter {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveDemo?: string;
  [key: string]: any; // Allow other properties like status, role, timeline for backward compatibility with our existing mock files
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const contentDir = path.join(process.cwd(), 'content');

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(contentDir, 'projects', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content
  };
}

export async function getAllProjects(): Promise<Omit<Project, 'content'>[]> {
  const projectsDir = path.join(contentDir, 'projects');
  if (!fs.existsSync(projectsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(projectsDir);
  const projects = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug,
        frontmatter: data as ProjectFrontmatter
      };
    });
    
  return projects;
}
