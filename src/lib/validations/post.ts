import * as z from "zod";


export const PostValidation = z.object({
    thread: z.string().min(1).refine(value => value.trim() !== '', 'Must not be empty'),
    accountId: z.string().email(),
  });
  
export const CommentValidation = z.object({
    thread: z.string().min(1).refine(value => value.trim() !== '', 'Must not be empty'),
    accountId: z.string().email(),
  });


export const LikeValidation = z.object({
    userId: z.string(),
    postId: z.string().optional(),
    commentId: z.string().optional(),
  }).refine(data => data.postId || data.commentId, {
    message: 'Either postId or commentId must be provided',
  });
  
