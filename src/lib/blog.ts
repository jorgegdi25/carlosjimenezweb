import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  image?: string;
  contentHtml?: string;
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /src/content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      let parsedDate = matterResult.data.date || '2020-01-01';
      if (parsedDate instanceof Date) {
        parsedDate = parsedDate.toISOString().split('T')[0];
      }

      // Combine the data with the id
      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        description: matterResult.data.description || matterResult.data.summary || '',
        date: parsedDate,
        author: matterResult.data.author || 'Carlos Alberto Jimenez',
        tags: matterResult.data.tags || [],
        image: matterResult.data.image || '',
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    });
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const contentHtml = matterResult.content;

  let parsedDate = matterResult.data.date || '2020-01-01';
  if (parsedDate instanceof Date) {
    parsedDate = parsedDate.toISOString().split('T')[0];
  }

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: matterResult.data.title || 'Untitled',
    description: matterResult.data.description || matterResult.data.summary || '',
    date: parsedDate,
    author: matterResult.data.author || 'Carlos Alberto Jimenez',
    tags: matterResult.data.tags || [],
    image: matterResult.data.image || '',
  };
}
