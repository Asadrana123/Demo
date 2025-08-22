export const initialComments = [
  {
    id: "0",
    text: "This is the first comment.",
    votes: 3,
    deleted: false,
    replies: [
      {
        id: "00",
        text: "This is a reply to the first comment.",
        votes: 1,
        deleted: false,
        replies: [],
      },
      {
        id: "01",
        text: "Another reply to the first comment.",
        votes: 0,
        deleted: false,
        replies: [
          {
            id: "010",
            text: "A nested reply inside a reply.",
            votes: 2,
            deleted: false,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    text: "This is the second comment.",
    votes: 5,
    deleted: false,
    replies: [],
  },
  {
    id: "2",
    text: "Third comment goes here!",
    votes: 0,
    deleted: false,
    replies: [],
  },
];
