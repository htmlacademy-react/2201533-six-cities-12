export type CommentType = {
  comment: string;
  rating: number;
}

export type PostCommentType = {
  comment: CommentType;
  id: number;
}

