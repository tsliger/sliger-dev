import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard';
import Loading from './Loading';
import NetworkIssue from './NetworkIssue';
import { AiOutlineSearch } from "react-icons/ai";

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

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts?populate=*")
      .then((res) => {
        console.log(res.data.data)
        setPosts(res.data.data as []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NetworkIssue />;
  }


  return (
    <div>
      <h1 className="mx-auto w-96 grid place-items-center pb-12 text-3xl font-bold tracking-widest text-white">Blog Posts</h1>
      <div className="w-full flex justify-center pb-16">
        <input className="bg-transparent decorations-none !outline-none placeholder:text-white/20 border-2 px-4 rounded-lg shadow-lg focus:border-[#FFE6C7] focus:shadow-none border-white/20 w-[330px] text-white font-mono" placeholder="Search Posts..." />
        <button className="bg-[#FFE6C7] ml-4  p-3 text-xs font-mono border-2 border-black/20 font-semibold rounded-full shadow-lg active:shadow-none active:scale-95 duration-150 transition"><AiOutlineSearch size={15} /></button>
      </div>
      <div className="grid md:px-16 2xl:grid-cols-3 lg:grid-cols-2 justify-items-center h-full space-y-16 lg:space-y-0">
        {posts && posts.map((item: any) => {
          const post: Post = item.attributes
          const authors: any = item.attributes.author.data
          const categories: any = item.attributes.categories.data
          const image: any = item.attributes.featured_image.data

          return <PostCard key={post.slug} post={post} authors={authors} categories={categories} image={image}/>;
        })}
      </div>
    </div>
  )
}
