export interface CommentType {
  comment: string;
  rating: number;
}

interface CommentsIdOffer {
  id: number;
}

export type PostCommentsType = CommentType & CommentsIdOffer;
