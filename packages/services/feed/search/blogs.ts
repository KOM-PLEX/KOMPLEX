import api from "../../../config/axios";

// export const searchBlogsService = async (
//     query: string,
//     limit: number,
//     offset: number,
//     userId: number
//   ) => {
//     try {
//       const searchResults = await meilisearch.index("blogs").search(query, {
//         limit,
//         offset,
//       });
//       const idsFromSearch = searchResults.hits.map((hit: any) => hit.id);
//       const cachedResults = (await redis.mGet(
//         idsFromSearch.map((id) => `blogs:${id}`)
//       )) as (string | null)[];

//       const hits: any[] = [];
//       const missedIds: number[] = [];

//       if (cachedResults.length > 0) {
//         cachedResults.forEach((item, idx) => {
//           if (item) hits.push(JSON.parse(item));
//           else missedIds.push(idsFromSearch[idx]);
//         });
//       }

//       // 3️⃣ Fetch missing blogs from DB
//       let missedBlogs: any[] = [];
//       if (missedIds.length > 0) {
//         const blogRows = await db
//           .select({
//             id: blogs.id,
//             userId: blogs.userId,
//             title: blogs.title,
//             description: blogs.description,
//             type: blogs.type,
//             topic: blogs.topic,
//             createdAt: blogs.createdAt,
//             updatedAt: blogs.updatedAt,
//             mediaUrl: blogMedia.url,
//             mediaType: blogMedia.mediaType,
//             username: sql`${users.firstName} || ' ' || ${users.lastName}`,
//             profileImage: users.profileImage,
//           })
//           .from(blogs)
//           .leftJoin(blogMedia, eq(blogs.id, blogMedia.blogId))
//           .leftJoin(users, eq(blogs.userId, users.id))
//           .where(inArray(blogs.id, missedIds));

//         const blogMap = new Map<number, any>();
//         for (const blog of blogRows) {
//           if (!blogMap.has(blog.id)) {
//             const formatted = {
//               id: blog.id,
//               userId: blog.userId,
//               title: blog.title,
//               description: blog.description,
//               type: blog.type,
//               topic: blog.topic,
//               createdAt: blog.createdAt,
//               updatedAt: blog.updatedAt,
//               username: blog.username,
//               profileImage: blog.profileImage,
//               media: [] as { url: string; type: string }[],
//             };
//             blogMap.set(blog.id, formatted);
//             missedBlogs.push(formatted);
//           }

//           if (blog.mediaUrl) {
//             blogMap.get(blog.id).media.push({
//               url: blog.mediaUrl,
//               type: blog.mediaType,
//             });
//           }
//         }

//         // Write missed blogs to Redis
//         for (const blog of missedBlogs) {
//           await redis.set(`blogs:${blog.id}`, JSON.stringify(blog), { EX: 600 });
//         }
//       }

//       // 4️⃣ Merge hits and missed blogs, preserving original order
//       const allBlogsMap = new Map<number, any>();
//       for (const blog of [...hits, ...missedBlogs])
//         allBlogsMap.set(blog.id, blog);
//       const allBlogs = idsFromSearch.map((id) => allBlogsMap.get(id));

//       // 5️⃣ Fetch dynamic fields fresh
//       const dynamicData = await db
//         .select({
//           id: blogs.id,
//           viewCount: blogs.viewCount,
//           likeCount: blogs.likeCount,
//           isSaved: sql`CASE WHEN ${userSavedBlogs.blogId} IS NOT NULL THEN true ELSE false END`,
//         })
//         .from(blogs)
//         .leftJoin(
//           userSavedBlogs,
//           and(
//             eq(userSavedBlogs.blogId, blogs.id),
//             eq(userSavedBlogs.userId, Number(userId))
//           )
//         )
//         .where(
//           inArray(
//             blogs.id,
//             idsFromSearch.map((b) => b.id)
//           )
//         );

//       const blogsWithMedia = allBlogs.map((b) => {
//         const dynamic = dynamicData.find((d) => d.id === b.id);
//         return {
//           ...b,
//           viewCount: dynamic?.viewCount ?? 0,
//           likeCount: dynamic?.likeCount ?? 0,
//           isSaved: !!dynamic?.isSaved,
//         };
//       });

//       return { data: blogsWithMedia, hasMore: allBlogs.length === limit };
//     } catch (error) {
//       console.error("Error searching blogs:", error);
//       throw error;
//     }
//   };

export const searchBlogs = async (
  query: string,
  limit: number = 10,
  offset: number = 0
) => {
  const response = await api.get(`/search/blogs`, {
    params: {
      query,
      limit,
      offset,
    },
  });

  return {data:response.data.data, isMatch: response.data.isMatch};
};
