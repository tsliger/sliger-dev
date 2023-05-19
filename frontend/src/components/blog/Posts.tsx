import { useEffect, useState } from 'react'
import ky from "ky"
import PostCard from './PostCard';
import Loading from '../utils/Loading';
import NetworkIssue from './NetworkIssue';
import { Pagination } from '@mui/material';

export interface Post {
  title: string;
  content: string;
  excerpt: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: number;
}

export default function Posts() {
  const [posts, setPosts] = useState([] as Post[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [metadata, setMeta] = useState(null)
  const [currentPage, setPage] = useState(1);

  function handlePageClick(e: any, val: any) {
    setPage(val)
  }

  const getPosts = async () => {
    setLoading(true)
    try {
      const res: any = await ky.get(`http://localhost:1337/api/posts?populate=*&pagination[page]=${currentPage}`).json()
      setPosts(res.data as []);
      setTimeout(() => {
        setLoading(false);
      }, 150)
      setMeta(res.meta)
    } catch (error) {
      if (error.name === 'HTTPError') {
        const errorJson = await error.response.json();
        setError("Could not validate credentials");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NetworkIssue />;
  }

  return (
    <div>
      <div className="grid pt-10 lg:pt-0 2xl:grid-cols-3 justify-items-center lg:grid-cols-2  mb-24 h-full z-40 gap-y-8 md:gap-y-16">
        {posts && posts.map((item: any) => {
          const post: Post = item.attributes
          const authors: any = item.attributes.author.data
          const categories: any = item.attributes.categories.data
          const image: any = item.attributes.featured_image.data
          const id: number = item.id;

          return <PostCard key={post.slug} post={post} authors={authors} categories={categories} image={image} postId={id}/>;
        })}
      </div>
      <div className="w-full grid place-items-center absolute -bottom-40">
        {metadata.pagination && 
          <Pagination page={currentPage} variant={'outlined'} count={metadata.pagination.pageCount} boundaryCount={2} onChange={handlePageClick} hidePrevButton/>
        }
      </div>
    </div>
  )
}
