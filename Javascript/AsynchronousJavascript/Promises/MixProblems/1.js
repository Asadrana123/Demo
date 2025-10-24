// 🧩 Problem — Multi-API with Timeout & Summary

// You have 3 users, and for each user you need to call 3 APIs:

// function fetchUser(userId) { /* resolves after 100–400ms, may fail */ }
// function fetchPosts(userId) { /* resolves after 200–500ms, may fail */ }
// function fetchComments(userId) { /* resolves after 150–450ms, may fail */ }


// Requirements:

// For each user, call all 3 APIs in parallel.

// Each API call has a timeout of 350ms — if it doesn’t respond, treat it as failed.

// Use Promise.allSettled to wait for all 3 APIs for a user.

// If all 3 APIs fail for a user, print:
// "User X: All APIs failed"

// Otherwise, print:
// "User X Successes: [...] Failures: [...]"

// After processing all users, log a summary object:

// {
//   totalUsers: 3,
//   totalAPIs: 9,
//   totalSuccess: ?,
//   totalFailed: ?,
//   totalTime: ? // in ms
// }


// continue:--
// https://chatgpt.com/c/68e68d3d-15b8-8323-9fb4-f4defbbc5120
// https://www.perplexity.ai/search/const-obj-val-1-inc-function-v-1CcAiokDS.a6la6KUvM2ig