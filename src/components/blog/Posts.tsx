import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Loading from "../utils/Loading";
import NetworkIssue from "./NetworkIssue";
import { Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/system';
import { Box } from '../Box';
import useSWR from "swr";

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

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Posts() {
  const [currentPage, setPage] = useState(1);
  const url = import.meta.env.PUBLIC_BACKEND_URL
  const { data, error, isLoading } = useSWR(
    `${url}/api/posts?populate=*&pagination[page]=${currentPage}`,
    fetcher
  );

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

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <NetworkIssue />;
  }

  return (

    <div className="mx-auto w-96 lg:w-auto flex flex-col justify-center">
      <div className="space-x-4">
        <button className="text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider">Most Recent</button>
        <button className="text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider">Technology</button>
      </div>
      <Grid container  className="gap-8" xs={12}>
        {data && data.data && 
          data.data.map((item: any) => {
            const post: Post = item.attributes;
            const authors: any = item.attributes.author.data;
            const categories: any = item.attributes.categories.data;
            const image: any = item.attributes.featured_image.data;
            const id: number = item.id;

            return (
              // <Grid key={post.slug} sm={12} md={8} lg={6} xl={4}>
              //   <PostCard
              //     key={post.slug}
              //     post={post}
              //     authors={authors}
              //     categories={categories}
              //     image={image}
              //     postId={id}
              //   />
              // </Grid>
              <Grid key={post.slug} className="grid place-items-center">
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
        {data.meta.pagination && (
          <Box>
            <MyPagination
              page={currentPage}
              classes={{ root: " px-4 shadow-xl py-3 rounded-full" }}
              variant={"outlined"}
              count={data.meta.pagination.pageCount}
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
