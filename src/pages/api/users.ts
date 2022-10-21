import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Lucas" },
    { id: 3, name: "Rafael" }
  ];

  return response.json(users);
};
