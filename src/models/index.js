// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post } = initSchema(schema);

export {
  Blog,
  Post
};