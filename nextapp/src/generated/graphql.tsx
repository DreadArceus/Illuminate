import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Guide>;
  getAll: Array<Scalars['String']>;
};

export type Guide = {
  __typename?: 'Guide';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  author: Scalars['String'];
  body: Array<Contents>;
};

export type Contents = {
  __typename?: 'contents';
  key: Scalars['String'];
  classes: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  complexContent?: Maybe<Array<Contents>>;
  codeOptions?: Maybe<CodeOptions>;
};

export type CodeOptions = {
  __typename?: 'codeOptions';
  enable: Scalars['Boolean'];
  noInline?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGuide?: Maybe<Guide>;
  getGuide?: Maybe<Guide>;
  dropGuide: Scalars['Boolean'];
};


export type MutationCreateGuideArgs = {
  GuideOptions: GuideInput;
};


export type MutationGetGuideArgs = {
  title: Scalars['String'];
};


export type MutationDropGuideArgs = {
  title: Scalars['String'];
};

export type GuideInput = {
  title: Scalars['String'];
  author: Scalars['String'];
  body: Array<ContentsInput>;
};

export type ContentsInput = {
  key: Scalars['String'];
  classes: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  complexContent?: Maybe<Array<ContentsInput>>;
  codeOptions?: Maybe<CodeOptionsInput>;
};

export type CodeOptionsInput = {
  enable: Scalars['Boolean'];
  noInline?: Maybe<Scalars['Boolean']>;
};

export type BaseGuideFragment = (
  { __typename?: 'Guide' }
  & Pick<Guide, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'author'>
  & { body: Array<(
    { __typename?: 'contents' }
    & Pick<Contents, 'key' | 'classes' | 'content'>
    & { complexContent?: Maybe<Array<(
      { __typename?: 'contents' }
      & Pick<Contents, 'key' | 'classes' | 'content'>
      & { codeOptions?: Maybe<(
        { __typename?: 'codeOptions' }
        & Pick<CodeOptions, 'enable' | 'noInline'>
      )> }
    )>>, codeOptions?: Maybe<(
      { __typename?: 'codeOptions' }
      & Pick<CodeOptions, 'enable' | 'noInline'>
    )> }
  )> }
);

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getAll'>
);

export type GetGuideMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type GetGuideMutation = (
  { __typename?: 'Mutation' }
  & { getGuide?: Maybe<(
    { __typename?: 'Guide' }
    & BaseGuideFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Guide' }
    & BaseGuideFragment
  )> }
);

export const BaseGuideFragmentDoc = gql`
    fragment BaseGuide on Guide {
  id
  createdAt
  updatedAt
  title
  author
  body {
    key
    classes
    content
    complexContent {
      key
      classes
      content
      codeOptions {
        enable
        noInline
      }
    }
    codeOptions {
      enable
      noInline
    }
  }
}
    `;
export const GetAllDocument = gql`
    query GetAll {
  getAll
}
    `;

export function useGetAllQuery(options: Omit<Urql.UseQueryArgs<GetAllQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllQuery>({ query: GetAllDocument, ...options });
};
export const GetGuideDocument = gql`
    mutation GetGuide($title: String!) {
  getGuide(title: $title) {
    ...BaseGuide
  }
}
    ${BaseGuideFragmentDoc}`;

export function useGetGuideMutation() {
  return Urql.useMutation<GetGuideMutation, GetGuideMutationVariables>(GetGuideDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...BaseGuide
  }
}
    ${BaseGuideFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};