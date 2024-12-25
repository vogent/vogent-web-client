// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    './__generated__/': {
      preset: 'client',
      schema: 'https://api.getelto.com/query',
      documents: ['*.ts'],
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
      config: {
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
