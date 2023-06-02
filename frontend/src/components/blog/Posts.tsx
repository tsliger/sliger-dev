import { useEffect, useState } from "react";
import ky from "ky";
import PostCard from "./PostCard";
import Loading from "../utils/Loading";
import NetworkIssue from "./NetworkIssue";
import { Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/system';
import { Box } from '../Box';

const MyPagination = styled(Pagination)({
  '& .Mui-selected': {
    backgroundColor: 'transparent',
    color: '#FFF'
   },
  "& .MuiPaginationItem-root": {
    border: "1px solid #fff",
    opacity: 0.3
   },
  
});

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
  const [metadata, setMeta] = useState(null);
  const [currentPage, setPage] = useState(1);

  function handlePageClick(e: any, val: any) {
    setPage(val);

    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("page", val);
      // window.location.search = searchParams.toString();
      var newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    }
  }

  useEffect(() => {
    if ("URLSearchParams" in window) {
      const urlParams = new URLSearchParams(window.location.search);
      const currPage = Number(urlParams.get("page"));

      if (currPage) {
        setPage(currPage);
      }
    }
  }, [currentPage]);

  const getPosts = async () => {
    setLoading(true);
    try {
      const res: any = await ky
        .get(
          `http://localhost:1337/api/posts?populate=*&pagination[page]=${currentPage}`
        )
        .json();
      setPosts(res.data as []);
      setTimeout(() => {
        setLoading(false);
      }, 150);
      setMeta(res.meta);
    } catch (error) {
      if (error.name === "HTTPError") {
        const errorJson = await error.response.json();
        setError("Could not validate credentials");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

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

    <div className="mx-16">
      <div className="space-x-4">
        <button className="text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider">Most Recent</button>
        <button className="text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider">Technology</button>
      </div>
      <Grid container className="" xs={12}>
        {posts &&
          posts.map((item: any) => {
            const post: Post = item.attributes;
            const authors: any = item.attributes.author.data;
            const categories: any = item.attributes.categories.data;
            const image: any = item.attributes.featured_image.data;
            const id: number = item.id;

            return (
              <Grid key={post.slug} sm={12} md={8} lg={6} xl={4}>
                <PostCard
                  key={post.slug}
                  post={post}
                  authors={authors}
                  categories={categories}
                  image={image}
                  postId={id}
                />
              </Grid>
            );
          })}
      </Grid>


      <div className="w-full grid place-items-center relative top-20 mb-24">
        {metadata.pagination && (
          <Box>
            <MyPagination
              page={currentPage}
              classes={{ root: " px-4 shadow-xl py-3 rounded-full" }}
              variant={"outlined"}
              count={metadata.pagination.pageCount}
              boundaryCount={2}
              onChange={handlePageClick}
              hidePrevButton
            />
          </Box>
        )}
      </div>
    </div>
  );
}
