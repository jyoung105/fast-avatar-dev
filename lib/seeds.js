const seeds = [
  {
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/42941477/299797223-d23980e8-0e4e-40f5-b73b-01890ef0e619.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240125T202059Z&X-Amz-Expires=300&X-Amz-Signature=926b667673bb3c430e53acf93e3078d78cd9e6cde26ebaccf5c70ca108c44846&X-Amz-SignedHeaders=host&actor_id=42941477&key_id=0&repo_id=748354957",
    prompt: "simplified continuous line colour drawing",
  },
  {
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/42941477/299797226-b3da33d6-6ba6-4653-a14a-f5a513b584bd.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240125T202116Z&X-Amz-Expires=300&X-Amz-Signature=3853ea8bd871fe187068201afdf8bccd0d4ef6678b36368c8f9f54ac5a6e5983&X-Amz-SignedHeaders=host&actor_id=42941477&key_id=0&repo_id=748354957",
    prompt: "analog film photo",
  },
  {
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/42941477/299797234-3c8857a4-0dc7-4142-97af-af34e9afc008.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240125T202220Z&X-Amz-Expires=300&X-Amz-Signature=13824927baab1d7724a9607efd844f619232fa03e8e95d035f7ebe8bc7961480&X-Amz-SignedHeaders=host&actor_id=42941477&key_id=0&repo_id=748354957",
    prompt: "anime in 90's",
  },
  {
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/42941477/299797219-1d79cd26-e1a1-430d-bd25-c961570d7638.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240125T202036Z&X-Amz-Expires=300&X-Amz-Signature=a407501c7f60361a0043f7ff26bb4899d9d78f06dfd212509aeb94c91ae33ced&X-Amz-SignedHeaders=host&actor_id=42941477&key_id=0&repo_id=748354957",
    prompt: "Cyberpunk 2077 killbot",
  },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
