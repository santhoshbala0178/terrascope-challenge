export type MemoType = {
  id: string;
  created_date?: string;
  title: string;
  body: string;
};

export type MemoListType = {
  memos: MemoType[];
};
