import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
console.log(process.cwd())
definitionsFactory.generate({
  typePaths: ['./src/api/schema/*.graphql'],
  path: './src/models/graphql-generated.ts',
  outputAs: 'class',
});