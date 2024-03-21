import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2dkDnLNLpXkJw0CRZKm8piiuupp",
  "user_2dq7Sk1ZpZWdSoXs5ecsXTSNhoR",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
