import { useMemo } from "react";

export const useSortedPosts = (posts, sorter) => {
  const sortedPosts = useMemo(() => {
    if (sorter) {
      return [...posts].sort((a, b) => b.id - a.id);
    }
    return posts;
  }, [sorter, posts]);
  return sortedPosts;
};

export const useSortedAndSearchedPosts = (posts, sorter, query) => {
  const sortedPosts = useSortedPosts(posts, sorter);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
