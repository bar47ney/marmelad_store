import { useMemo } from "react";

export const useSortedPosts = (posts, sorter) => {
  const sortedPosts = useMemo(() => {
    if (sorter) {
      return [...posts].sort((a, b) => b.price - a.price);
    }
    if (!sorter) {
      return [...posts].sort((a, b) => a.price - b.price);
    }
    return posts;
  }, [sorter, posts]);
  return sortedPosts;
};

export const useSortedAndSearchedPosts = (posts, sorter, query) => {
  const sortedPosts = useSortedPosts(posts, sorter);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
