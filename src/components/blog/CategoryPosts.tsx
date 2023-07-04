import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import PostCard from "./PostCard";
import { Post } from "./Posts";

export default function CategoryPosts({ posts }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mb-24">
      {posts &&
            posts.map((item: any) => {
              const post: Post = item.attributes;
              const authors: any = item.attributes.author.data;
              const categories: any = item.attributes.categories.data;
              const image: any = item.attributes.featured_image.data;
              const id: number = item.id;

              return (
                <PostCard
                  key={post.slug}
                  post={post}
                  authors={authors}
                  categories={categories}
                  image={image}
                  postId={id}
                />
              );
            })}
    </div>
  )
}
